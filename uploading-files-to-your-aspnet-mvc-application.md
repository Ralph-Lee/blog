<!--Title:"Uploading Files To Your ASP.NET MVC Application", PublishedOn:"2010-05-27T03:25:31", Intro:"I've recently had the need in 2 projects where the user needs to upload files to the web application" -->

<span>
  <p>I've recently had the need in 2 projects where the user needs to upload files to the web application. Previous methods in the .NET 1.1 and 2.0 timeframes made this painful. </p>
  <h2>Use jQuery Uploadify To Upload Files to Your Web App </h2>
  <p>This article will focus on the jQuery plugin <a href="http://www.uploadify.com/">Uploadify</a>.  It provides the </p>
  <table border="0" cellspacing="0" cellpadding="2" width="559">
    <tbody>
      <tr>
        <td valign="top" width="248">Benefits to the Developer</td>
        <td valign="top" width="309">Benefits to the User</td>
      </tr>
      <tr>
        <td valign="top" width="248">
          <ul>
            <li>event based development </li>
            <li>easy to use jQuery </li>
            <li></li>
            <li>No typical file type=input </li>
          </ul>
        </td>
        <td valign="top" width="309">
          <ul>
            <li>Instant and realtime feedback on how the upload is performing </li>
            <li>No typical file type=input controls </li>
            <li></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
  <p></p>
  <p>The Uploadify projet site doesn't have samples for ASP.NET MVC, however. For those developing an ASP.NET MVC solution, you might be wondering how to weave in Uploadify to your Views and Controllers. There aren't too many tricks here, but it's a working solution that hopefully you can modify to your needs. </p>
  <p>In this solution, I've leveraged Uploadify with ASP.NET MVC.  I added in a few other features in this example, but here are the basic steps: </p>
  <p>* The user clicks on the  <font size="2" face="Courier New">&lt;input type=<span class="str">"file"</span> /&gt;</font>. The Uploadify nicely styles the boring old file input control into a Flash object.     <br />* The user chooses 1 or more files to upload     <br />* Each file has its own upload progress bar. The jQuery fade effect is a nice touch.     <br />* The  <font size="2" face="Courier New">'script'</font> attribute on the Uploadify element is important. It's the controller method that'll be receiving the call. Note that instead of hard-coding the URL, we let the MVC View engine determine the route. '<font size="2" face="Courier New">&lt;%=Url.Action( "UploadPhoto","Photo")%&gt;</font>'     <br />* The script hits the Controller method. This is a POST operation.     <br />* The Controller saves the uploaded image to disk.  (This logic should live OUTSIDE the controller in a class whose sole job is this.)     <br />* It creates a thumbnail image, and saves that to disk.     <br />* The Controller returns a JSON object with the 2 pieces of data that the View needs: thumbnail and fullsize image URLs.     <br />* The onComplete method on the Uploadify object receives the JSON object. It writes out the returned thumbnail in an img tag, and its wrapped with a link to the larger image. </p>
  <h2>Breaking Down the Uploadify element. </h2>
  <p>
    <font size="2" face="Courier New">$(document).ready(function () { </font>
  </p>
  <p>
    <font size="2" face="Courier New">            $('#fileInput').uploadify({      <br />                //the Flash object that sits overtop the &lt;input type='file'&gt; </font>
  </p>
  <p>
    <font size="2" face="Courier New">                'uploader': '&lt;%=ResolveUrl("~/Scripts/Uploadify/uploadify.swf")%&gt;',    <br />                'cancelImg': '&lt;%=ResolveUrl("~/Scripts/Uploadify/cancel.png")%&gt;',   //path to your cancel image.       <br />                'script': '&lt;%=Url.Action( "UploadPhoto","Photo")%&gt;', //don't hardcode your URL here if possible       <br />              //'folder': '/Uploads', //you don't really need this here; the Controller will determine where to save the upload       <br />                'multi': true,   //Allow the user to select many items at one time.       <br />                'auto': true,    //start the upload of the file(s) right away, instead of waiting for the form submission.       <br />                'fileExt': '*.jpg;*.png;*.gif;*.bmp;*.jpeg;',      //whitelist of file extensions.       <br />                'buttonText': 'Include A Picture',                 //the text you wish to show on the 'Upload' button       <br />                'displayData': 'speed',                            //the       <br />                onComplete: function (event, queueID, fileObj, response, data) {       <br />                    eval("var resp=" + response); //this is critical. You must eval the response into another object. A defect likely. To do with JSON and Uploadify together.       <br />                     //show the thumbnails as links to the larger pictures for the user.       <br />                    $("#uploadedImgs").append("&lt;a href='" + resp.NewFile + "' target='_blank' &gt;&lt;img border='0' id='' src='" + resp.Thumb + "'/&gt;&lt;/a&gt;"); </font>
  </p>
  <p>
    <font size="2" face="Courier New">                }      <br />           , 'onError': function (e, q, f, o) {       <br />               alert("We had a problem: " + o.info);       <br />           } </font>
  </p>
  <p>
    <font size="2" face="Courier New">            }); </font>
  </p>
  <p>
    <font size="2" face="Courier New">        });</font>
  </p>
  <p></p>
  <h2>Controller </h2>
  <p>
    <font size="2" face="Courier New">    public class PhotoController : Controller      <br />    {       <br />        [AcceptVerbs(HttpVerbs.Post)]       <br />        public JsonResult UploadPhoto(HttpPostedFileBase image_upload)       <br />        {       <br />            try       <br />            {                   <br />                if ((image_upload == null) &amp;&amp; (Request.Files.Count &gt; 0))       <br />                {       <br />                    image_upload = Request.Files[0];       <br />                } </font>
  </p>
  <p>
    <font size="2" face="Courier New">                string tempPath = Server.UrlDecode(SaveLocation);      <br />                string urlpath = tempPath; </font>
  </p>
  <p>
    <font size="2" face="Courier New">                tempPath = EnsurePathIsWellFormedForServer(tempPath); </font>
  </p>
  <p>
    <font size="2" face="Courier New">                string savepath = Server.MapPath(tempPath);      <br />                string filename = image_upload.FileName;            </font>
  </p>
  <p>
    <font size="2" face="Courier New">                EnsurePathExistsOnDisk(savepath);      <br />                filename = EnsureFileNameIsUnique(filename, savepath); </font>
  </p>
  <p>
    <font size="2" face="Courier New">                string fileFullPath = System.IO.Path.Combine(savepath, filename);      <br />                image_upload.SaveAs(fileFullPath); </font>
  </p>
  <p>
    <font size="2" face="Courier New">                FileInfo f = new FileInfo(fileFullPath);      <br />                string thumbpic = string.Empty; </font>
  </p>
  <p>
    <font size="2" face="Courier New">                //make a thumbnail      <br />                using (Image newPic = SmallJob.Helpers.Thumbnail.CreateThumbnail(Image.FromFile(fileFullPath), 25))       <br />                {       <br />                    ImageFormat iff = DetermineImageFormat(f.Extension.ToLower());       <br />                    newPic.Save(f.FullName.Replace(f.Extension, "-Thumb" + f.Extension), iff);       <br />                    thumbpic = f.Name.Replace(f.Extension, "-Thumb" + f.Extension);                    <br />                }       <br />                //return back the various details that the View wants. The URL to the Thumb and the original pic.       <br />                return Json(new { NewFile = urlpath + "/" + filename , Thumb = urlpath + "/" + thumbpic});       <br />            }       <br />            catch (Exception ex)       <br />            {       <br />                string errText = "Error: " + ex.Message;       <br />                return Json(new { Err = ex.Message });       <br />            }       <br />        } </font>
  </p>
  <p>
    <font size="2" face="Courier New">        public static Image CreateThumbnail(System.Drawing.Image fullSizeImage, decimal percentage)      <br />        {       <br />            if (percentage &lt; 0) percentage = percentage * 100; //ensure the user passed in a full value greater than one.       <br />            percentage = percentage / 100;  //now kick it down to the percentage.       <br />            int thumbWidth = Convert.ToInt32((decimal)fullSizeImage.Width * percentage);       <br />            int thumbHeight = Convert.ToInt32((decimal)fullSizeImage.Height * percentage);       <br />            return fullSizeImage.GetThumbnailImage(thumbWidth, thumbHeight, null, IntPtr.Zero);            <br />        }       <br />        private static ImageFormat DetermineImageFormat(string fileExtension)       <br />        {       <br />            ImageFormat iff = null;       <br />            switch (fileExtension)       <br />            {       <br />                case ".png": iff = ImageFormat.Png; break;       <br />                case ".jpeg": iff = ImageFormat.Jpeg; break;       <br />                case ".jpg": iff = ImageFormat.Jpeg; break;       <br />                case ".bmp": iff = ImageFormat.Bmp; break;       <br />                case ".gif": iff = ImageFormat.Gif; break;       <br />                default: break;       <br />            }       <br />            return iff;    <br />        }       <br />        private static string EnsurePathIsWellFormedForServer(string tempPath)       <br />        {       <br />            if (!tempPath.StartsWith("~"))       <br />                tempPath = "~" + tempPath;       <br />            if (!tempPath.EndsWith("/"))       <br />                tempPath += "/";       <br />            return tempPath;       <br />        } </font>
  </p>
  <p>
    <font size="2" face="Courier New">        private void EnsurePathExistsOnDisk(string savepath)      <br />        {       <br />            if (!Directory.Exists(savepath))       <br />                Directory.CreateDirectory(savepath);       <br />        } </font>
  </p>
  <p>
    <font size="2" face="Courier New">        private string EnsureFileNameIsUnique(string filename, string savepath)      <br />        {       <br />            string tempName = filename;       <br />            int newFileNameIndex = 1;       <br />            System.IO.FileInfo f = new FileInfo(filename); </font>
  </p>
  <p>
    <font size="2" face="Courier New">            string fileNameOnly = f.Name.Replace(f.Extension, string.Empty); </font>
  </p>
  <p>
    <font size="2" face="Courier New">            while (System.IO.File.Exists(savepath + "/" + filename))      <br />            {       <br />                filename = string.Format("{0}-{1}{2}", fileNameOnly, newFileNameIndex, f.Extension);       <br />                newFileNameIndex++;       <br />            }       <br />            return filename;       <br />        }       <br />        private string SaveLocation       <br />        {       <br />            get       <br />            {       <br />                string uploadDir = "/Uploads"; </font>
  </p>
  <p>
    <font size="2" face="Courier New">                if (!string.IsNullOrEmpty(ConfigurationManager.AppSettings["CustomerUploadsDirectory"]))      <br />                {       <br />                    uploadDir = ConfigurationManager.AppSettings["CustomerUploadsDirectory"].ToString();       <br />                }       <br />                return uploadDir;       <br />            }       <br />        }</font>
  </p>
  <p>
    <font size="2" face="Courier New">    }</font>
  </p>
  <p></p>
  <h2>View </h2>
  <p>
    <font size="1" face="Courier New">   &lt;script src="</font>
    <a href="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js&quot;">
      <font size="1" face="Courier New">http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js"</font>
    </a>
    <font size="1" face="Courier New"> type="text/javascript"&gt;&lt;/script&gt;  </font>
  </p>
  <p>
    <font size="1" face="Courier New">    &lt;link href="&lt;%=ResolveUrl("~/Scripts/Uploadify/uploadify.css")%&gt;" rel="stylesheet"      <br />        type="text/css" /&gt;       <br />    &lt;script src="&lt;%=ResolveUrl("~/Scripts/Uploadify/jquery.uploadify.v2.1.0.min.js")%&gt;"       <br />        type="text/javascript"&gt;&lt;/script&gt;       <br />    &lt;script src="&lt;%=ResolveUrl("~/Scripts/Uploadify/swfobject.js")%&gt;" type="text/javascript"&gt;&lt;/script&gt;       <br />    &lt;script type="text/javascript"&gt; </font>
  </p>
  <p>
    <font size="1" face="Courier New">        $(document).ready(function () { </font>
  </p>
  <p>
    <font size="1" face="Courier New">            $('#fileInput').uploadify({      <br />                'uploader': '&lt;%=ResolveUrl("~/Scripts/Uploadify/uploadify.swf")%&gt;',       <br />                'cancelImg': '&lt;%=ResolveUrl("~/Scripts/Uploadify/cancel.png")%&gt;',       <br />                'script': '&lt;%=Url.Action( "UploadPhoto","Photo")%&gt;', //don't hardcode your URL here if possible       <br />                'multi': true,       <br />                'auto': true,       <br />                'fileExt': '*.jpg;*.png;*.gif;*.bmp;*.jpeg;',       <br />                'buttonText': 'Include A Picture',       <br />                'displayData': 'speed',                <br />                onComplete: function (event, queueID, fileObj, response, data) {       <br />                    eval("var resp=" + response);                    <br />                    $("#uploadedImgs").append("&lt;a href='" + resp.NewFile + "'&gt;&lt;img border='0' id='' src='" + resp.Thumb + "'/&gt;&lt;/a&gt;");       <br />                }       <br />           , 'onError': function (e, q, f, o) {       <br />               alert("We had a problem: " + o.info);       <br />           } </font>
  </p>
  <p>
    <font size="1" face="Courier New">            });      <br />        });       <br />    &lt;/script&gt; </font>
  </p>
  <p>
    <font size="1" face="Courier New">    &lt;h3&gt;Any Pictures to Include?&lt;/h3&gt;      <br />    &lt;p&gt;Include pictures here.&lt;/p&gt;       <br />    &lt;input id="fileInput" name="fileInput" type="file" /&gt;       <br />    &lt;div id="uploadedImgs" /&gt;</font>
  </p>
</span>