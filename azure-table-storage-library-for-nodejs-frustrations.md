<!--{Title:"Azure Node SDK Library Table Storage Is Frustrating",PublishedOn:"27-Jul-2014",Intro:"I'm moving from blob storage to table storage and finding that the table storage APIs are just frustrata-bad."}-->
<style>img{border:1px solid black;}</style>
I'm working on a small personal project, and decided on a combo of Node.js, Azure PaaS, [Azure Table Storage](http://azure.microsoft.com/en-us/documentation/articles/storage-nodejs-how-to-use-table-storage/#what-is), and [Visual Studio Online 'Monaco'](http://i.imgur.com/JRGTL5O.png) as my IDE. All these technologies fit together nicely. The Azure team has exposed a REST API, and a [Node package](https://www.npmjs.org/package/azure-storage) to make it easy to access Table Storage via APIs in Node. I love the idea of Azure providing and supporting a nearly infinitely scalable NoSQL storage layer. 

The **Microsoft Azure Storage Client Library for Node.js** is [open source on GitHub](https://github.com/Azure/azure-storage-node), but don't confuse it with the [**older library**](https://www.npmjs.org/package/azure).

So this sounds like the best package to use.

    npm install azure-storage 

This library allows you to write basic CRUD functionality for your app, including search. Microsoft has a decent page describing how to implement the basics: [How to Use the Table Service from Node.js](http://azure.microsoft.com/en-us/documentation/articles/storage-nodejs-how-to-use-table-storage). 

This library is attractive for a few reasons:

- there is a team at Microsoft working on this. You get all the benefits of 1st party support - for me, the most important one being quality.
- its development is done in public. Defects can be reported. Its devs and PMs can be contacted.

#### Inserting Data

Here's where it starts to smell a bit.  Note the `entity` on line 4 in this image; this is meant to be the object that you're saving. `Customer`, `invoice`, what have you. The sample here illustrates that you must shape the entity to be saved in a particular way.

![the docs for insertEntity showing how you need to wrap with a call to entGen](http://i.imgur.com/7Yn1q17.png)

The `insertEntity` method **requires your entity to have any properties that you wish to be saved run through an this `entityGenerator` method**. You simply specify its type, and supply the value. Seems simple.

This is poor implementation on the API for 2 reasons:

1. This shouldn't be forced on the consuming developer. Obviously if the OData implementation requires type information, types need to be given here. However, the developer shouldn't be **forced** to provide this information. The library should simply interpret any property that is *not* run though an `entityGenerator` as a string type, and represented on the OData side as such. A non-`entGen`'d property shouldn't simply be dropped. I'd call that *dev-hostile*.
 
2. The resulting overhead. For a developer to use Azure Table Storage using this library, they have to take on some overhead and code around this feature. The library is attractive, for the reasons above, and it's worth keeping. The library dev has, I'm assuming, made other assumptions about the dev using this library. They think that the dev:
	- is OK with `entGen` littered throughout their code whereever they add or modify properties.
	- will work around

I'm not saying that the usage of an API should necessarily not cause you to write more code, but it should do its best to help you avoid writing unnecessary code. Layering code. Translating code. Converting code.  


#### Working Around Bad Its Implementation

The likely reason for the odd format due to Table Storage being accessible by OData. The Azure Storage team wants to be able to provide types for properties.


This presents problems.

- You must specify each property. This is a problem if you're expecting to be using a dynamically typed language, and or simply create new properties on the fly. This scheme forces you to
  - decide/declare the datatype of the property
  - incur code maintenance overhead when adding/removing/renaming/retyping properties on your entities. 
- You must now use this `entityGenerator` on your entities.
- The `PartitionKey` and `RowKey` 

For the curious, here's [the JSON that is sent to Azure Table Storage](http://i.imgur.com/GriiDft.png). It's verbose, but it really doesn't impact me as the user at all. 

Instead of going to each method where I'm creating entities (pulled from form elements, constructed from Ajax calls, etc), and littering it with `entGen` all over the place, I wrote a method to transfer all properties. This method lives down in my AzureTableStorage.js where all the storage related code lives. 

This function basically takes any object given to it, and makes a new Azure Table specific version of it. The fucntion creates a new object, and doesn't modify the object passed to it. The new object gets the Azure-required properties `PartitionKey` and `RowKey`, and then all the properties in the object you pass in. EAch property is typed as a `String`, for simplicity's sake.

	function applyAzureProperties(obj) {
	  var entGen = azure.TableUtilities.entityGenerator;
	  var azureObj = {
	    PartitionKey: entGen.String("someEntity"),
	    RowKey: entGen.String(obj.id)//someID that you consider the primary key in the table.
	  };
	  //iterate all properties on the object, and
	  //create on the Azure entity, with its value as String type.
	  for (var propertyName in obj) {
	    azureObj[propertyName] = entGen.String(obj[propertyName]);
	  }
	  return azureObj;
	}

**Note: this is problematic for arrays**, which the Azure Table Storage docs don't even address.

#### Retrieving Data

The workaround does the reverse. It loops through all the properties on the Azure Table 'row' entity, and gives you back every property and value that was on the object when you'd saved it to Table Storage.you'd previously specified.

	function convertObjectForAzure(azureTableEntity) 
	{
	  var obj = {};
	  for (var propertyName in azureTableEntity) {
	    obj[propertyName] = azureTableEntity[propertyName]["_"];
	  }
	  return obj;
	}

![the JSON that comes back from Azure Table Storage on a retrieveEntity call](http://i.imgur.com/whZQUw2.png)

![results of workaround extracting from the underscore property](http://i.imgur.com/t9RkEAp.png)


Shoutout to [JSON Format](http://jsonformat.com/) :)

