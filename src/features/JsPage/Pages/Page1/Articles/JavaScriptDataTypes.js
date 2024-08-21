import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

export const JavaScriptDataTypes = () => (
<>
    <ArticleHeader id="8">JavaScript Data Types</ArticleHeader>
        <Article>
<SectionHeader>JavaScript Data Types</SectionHeader>
<Section>
<ul>
    <li><b>String</b></li>
    <li><b>Number</b></li>
    <li><b>Boolean</b></li>
    <li><b>Object</b></li>
    <li><b>Undefined</b></li>
    <li><b>Null</b></li>
    <li><b>Symbol</b></li>
    <li><b>Bigint</b></li>
</ul>
</Section>
<SectionHeader>JavaScript String</SectionHeader>
<Section>
<b>Strings</b> are pieces of a text, set of characters in <Highlighted>"..."</Highlighted> or <Highlighted>'...'</Highlighted> .
<CodeSpace>
{`
let firstName = "Bob";
let lastName = 'Code';
`}
</CodeSpace>
</Section>

<SectionHeader>JavaScript Number</SectionHeader>
<Section>
There are two types of <b>numbers</b>: <b>integer</b> (witchout decimals) and <b>floating</b> (witch decimals).
<CodeSpace>
{`
let x = 2;
let y = 2.14;
`}
</CodeSpace>
</Section>

<SectionHeader>JavaScript Boolean</SectionHeader>
<Section>
<CodeSpace>
{`
let x = true;
let y = false;
`}
</CodeSpace>
</Section>

<SectionHeader>JavaScript Object</SectionHeader>
<Section>
An <b>Object</b> is a collection of related data and/or functionality.
<CodeSpace>
{`
const person ={
  firstName: "Bob",
  lastName: "Code",
  age: 30,
  hobbies: ["coding", "gaming", "music listening"],
  isMarried: true
};
`}
</CodeSpace>
The <Highlighted>person</Highlighted> <b>object</b> contains <b>properties</b> thats are separated by <b>commas</b> <Highlighted>,</Highlighted> .<br />
The <b>name</b> and <b>value</b> are separated by a colon <Highlighted>:</Highlighted> .
</Section>

<SectionHeader>Methods in an Object</SectionHeader>
<Section>
An <b>object</b> can also contain <b>functions</b> (methods)
<CodeSpace>
{`
const person = {
  fullName = "Bob Code",
  age: 30,

  showName: funciot() {
    alert(this.fullName);
  },
  showAge: function() {
    alert(this.age);
  }
};
`}
</CodeSpace>
<Hint>The <Highlighted>this</Highlighted> keyword refers to the current object.</Hint>
</Section>

<SectionHeader>Accessing Object's Properties</SectionHeader>
<Section>
You can use a <b>dot</b> <Highlighted>.</Highlighted> 
<CodeSpace>
{`
person.name;
person.age;
person.hobbies[0];
`}
</CodeSpace>
Or <b>square brackets</b> <Highlighted>[...]</Highlighted> to access an obejct.
<CodeSpace>
{`
person["name"];
person["age"];
person[hobbies][0];
`}
</CodeSpace>
</Section>
<SectionHeader>An Object In An Object</SectionHeader>
<Section>
You can put objects inside an object.
<CodeSpace>
{`
const fruits = {
  apple: {
    color: "red",
    taste: "sweet"
  },
  lemon: {
    color: "yellow",
    taste: "sour"
  }
}

document.write(fruits.apple.red);
`}
</CodeSpace>
</Section>
        </Article>
</>
);