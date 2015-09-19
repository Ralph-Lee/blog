<!--{Title:"HL7: Easier Than You Have Heard",Intro:"It's all about the arrays.",PublishedOn:"19-Sep-2015",Tags:["hl7"]}-->

HL7 is the format/*standard* used in health care messaging. There are 2 major versions. The format is typically 

#### HL7 Version 2 (v2)

This is the format used in most health care established or legacy systems. 

HL7 v2 is mostly used today because it's legacy, and has massive inertia. Here's why:

- Health care information systems are slow to change. They value stability, and vendors typically are investing elsehwere in their software system. I've felt a definite *if it ain't broke, don't fix it* vibe from vendors.
- Massive investments have been made by health care companies.
- It's easy to understand.


**An List of Arrays**

    PID|0004721||CAMPBELL^PHIL^FOO^^^||19490228|M||B|254 MAIN ST^^ANYTOWN^NY^90210^US||216-123-4567|||M|NON|400003403|

HL7 v2 is easy to understand because it lays out information in lines (segments) of plaintext. v2 uses a separator character, usually a pipe `|`, to separate fields in segments.

Each segment encompasses an aspect of the message (patient information, lab order, observed result, message header). Segments are laid out in the message separated by a line break. The segment is referred to by its name. The name is the very field in the segment. The example above is a `PID` segment.

Each field is separated by a pipe, and are referred to by the field's 0-based index in the segment. The example above has field `PID-1` value of `0004721`, and `PID-5` has a date value in format `yyyyMMdd`: `19490228`.

Each field can have discrete values inside it; those are sub-components. Ususally each discrete value is separated by a caret `^`. The example above has a patient name in `PID-3`. This field has 6 subcomponents: 

- `PID-3.1` is family/last name.
- `PID-3.2` is given name.
- `PID-3.3` is middle/other names.
- `PID-3.4` through `.6` are empty. 

#### HL7 Version 3 (v3)

This is the modern format that uses XML. This format was created/adopted in 2005, and v3 carries all the baggage that XML brings. Unfortunately the adoption by vendors has been slow.

New integrations ought to be developed using the v3 format, but the format has problems.


- XML is heavy, and difficult to read
- vendor
