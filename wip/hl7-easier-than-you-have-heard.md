<!--{Title:"HL7: Easier Than You Have Heard",Intro:"It's all about the arrays.",PublishedOn:"19-Sep-2015",Tags:["hl7"]}-->

HL7 is the format/standard used in health care messaging. There are 2 major versions. The format is typically used to transfer data from one originating system to others. A message typically conveys an event or encounter or some kind of change of state. These messages can be used in medical scenarios like:

- patient registration (admissions to facilities, transfer of patient location within the facility, or discharge)
- patient demographics changes (name, address, etc)
- lab orders and results (urine/blood test on a sample, or biospsy on a piece of skin)
- pharmacy orders 
- radiology orders and results
- food orders
- mental health or community nurse visits


## HL7 Version 2 (v2)

This is the format used in most health care established or legacy systems. 

HL7 v2 is mostly used today because it is legacy, and has massive inertia. Here's why:

- Health care information systems are slow to change. They value stability, and vendors typically are investing elsehwere in their software system. I've felt a definite *if it ain't broke, don't fix it* vibe from vendors.
- Massive investments have been made by health care companies.
- It's easy to understand.


###An List of Arrays

    PID|0004721||CAMPBELL^PHIL^FOO^^^||19490228|M||B|254 MAIN ST^^ANYTOWN^NY^90210^US||216-123-4567|||M|NON|400003403|

HL7 v2 is easy to understand because it lays out information in lines (segments) of plaintext. v2 uses a separator character, usually a pipe `|`, to separate fields in segments.

Each segment encompasses an aspect of the message (patient information, lab order, observed result, message header). Segments are laid out in the message separated by a line break. The segment is referred to by its name. The name is the very field in the segment. The example above is a `PID` segment.

Each field is separated by a pipe, and are referred to by the field's 0-based index in the segment. The example above has field `PID-1` value of `0004721`, and `PID-5` has a date value in format `yyyyMMdd`: `19490228`.

Each field can have discrete values inside it; those are components. Ususally each discrete value is separated by a caret `^`. The example above has a patient name in `PID-3`. This field has 6 components: 

- `PID-3.1` is family/last name.
- `PID-3.2` is given name.
- `PID-3.3` is middle/other names.
- `PID-3.4` through `.6` are empty. 

v2 is easy to read and construct, and its segments are well defined. v2 has been versioned though the years, with each version improving on its predacessor. Some fields are added to segments, some renamed to clarify for intent, and some allowed to have components within. v2.3 has value `x`, and v2.3.5 allows for value `x^y`.


### Shortcomings

v2 isn't so much of a standard, but a format with suggested components. This ends up meaning that you can place data in fields where the spec names it something completely different. Basically, as long as the sender and receiver agree which data should go in which specific location, you can do that. An outside observer might accept this message, without knowing of that customization, and interpret the data incorrectly.

### Customizations via Z Segments

v2 defines a lot of segments, but allows you to add custom segments. You name these yourself, and prefix these with `Z`, and they're referred to as Z segments. 

Create a Z segment when you need to include or add data, and you cannot find a suitable place in an existing component, or the vendor cannot change how it constructs the segments.

Typically you keep the name of the segment to max length 3, so you end up with `ZIN` for an insurance Z segment, or `ZCD` to store communicable disease info.

    ZIN|9043723478|Covered|20170915|7847^Vendor X^Ontario|

Here's a segment containing insurance information. This example has:

- `ZIN-1` some identifier
- `ZIN-2` a status
- `ZIN-3` a date
- `ZIN-4` some vendor information (an id, a description/name, and a location) in components.

These are all non-standard and tailor made for the specific application's needs.


## HL7 Version 3 (v3)

This is the modern format that uses XML. This format was created/adopted in 2005, and allows for fine-grain specifications.


### Barriers to Adoption

v3 carries all the baggage that XML brings. Unfortunately the adoption by vendors has been slow.


New integrations ought to be developed using the v3 format when you have the choice, but the format has problems.


- XML is heavy, and difficult to read
- vendor
