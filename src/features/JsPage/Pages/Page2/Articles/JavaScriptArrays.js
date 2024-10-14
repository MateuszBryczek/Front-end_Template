import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import CodeSpace from "../../../../CodeSpace/CodeSpace";
import Table from "../../../../../common/Tabele";

const arrayColumn = ["Name", "Usage", "Output"];
const arrayData = [
    {Name: "Array length", Usage: "array.length;", Output: "The length of an array"},
    {Name: "Array toString()", Usage: "array.toString();", Output: "Converts an array to a string with values separated by comma"},
    {Name: "Array at()", Usage: "array.at(x);", Output: "Returns an x index element"},
    {Name: "Array join()", Usage: 'array.join("x");', Output: 'Joins all array elements into a string with values separated by "x"'},
    {Name: "Array pop()", Usage: "array.pop();", Output: 'Removes the last element from an array, second use returns the value that was "popped out"'},
    {Name: "Array push()", Usage: 'array.push("text");', Output: 'Adds new "text" element at the end of an array'},
    {Name: "Array shift()", Usage: "array.shift();", Output: 'Removes the first array element and "shifts" all other elements to a lower index, second use returns the value that was "shifted out".'},
    {Name: "Array unshift()", Usage: 'array.unshift("text");', Output: 'Adds "text" element at the start of an array and "unshift" older elements'},
    {Name: "Array delete()", Usage: 'array.delete(x);', Output: 'Leaves undefined hole in the array x index'},
    {Name: "Array concat()", Usage: "array1.concat(array2);", Output: "Creates a new array by merging multiple existing arrays"},
    {Name: "Array copyWithin()", Usage: "array.copyWithin(x, y);", Output: "Copies x index element to y index of an array"},
    {Name: "Array flat()", Usage: "array.flat();", Output: "Creates a new array with sub-array elements concatenated to a specified depth"},
    {Name: "Array flatMap()", Usage: "array.flatMap(x => [x, x * y]);", Output: "First maps all elements of an array and then creates a new array by flattening the array"},
    {Name: "Array splice()", Usage: 'array.splice(x1, x2, "text1", "text2");', Output: 'Add new items to an array'},
    {Name: "Array splice()", Usage: 'array.splice(x);', Output: 'Remove elements without leaving "holes" in the array'},
    {Name: "Array toSpliced()", Usage: "array.toSpliced(x, y);", Output: "Creates a new array, keeping the original array unchanged"},
    {Name: "Array slice()", Usage: "array.slice(x);", Output: "Slices out a piece of an array into a new array"},
];

const arraySearchColumn = ["Name", "Usage", "Output"];
const arraySearchData = [
    {Name: "Array indexOf()", Usage: 'array.indexOf("text");', Output: 'Returns index of "text" element'},
    {Name: "Array lastIndexOf()", Usage: 'array.lastIndexOf("text");', Output: 'Returns index of the las "text" element'},
    {Name: "Array includes()", Usage: 'array.includes("text");', Output: 'Check if array contain "text" and return boolean'},
    {Name: "Array find()", Usage: "array.find(function);", Output: "Returns the value of the first array element that passes a test function"},
    {Name: "Array findIndex()", Usage: "array.findIndex(function);", Output: "Returns the index of the first array element that passes a test function"},
    {Name: "Array findLast()", Usage: "array.findLast(x => x > y);", Output: "Returns the value of the first element that satisfies a condition"},
    {Name: "Array findLastIndex()", Usage: "array.findLastIndex(x => x > y);", Output: "Returns the index of the last element that satisfies a condition"},
];

const arraySortColumn = ["Name", "Usage", "Output"];
const arraySortData = [
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
    {Name: "Array sort()", Usage: "array.;", Output: ""},
];

export const JavaScriptArrays = () => (
<>
    <ArticleHeader id="3">JavaScript Arrays</ArticleHeader>
    <Article>
<SectionHeader>JavaScript Arrays</SectionHeader>
<Section>
A JavaScript <b>array</b> is a collection of values. Each value is written with <b>squere brackets</b> <Highlighted>[...]</Highlighted> and separated with a <b>comma</b> <Highlighted>,</Highlighted> .<br />
The data type of arrays is <b>object</b>.
<CodeSpace>
{`
const fruits = ["Apple", "Bananas", "Oranges"];
`}
</CodeSpace>
</Section>

<SectionHeader>Accessing Array Elements</SectionHeader>
<Section>You access an array element by referring to the <b>index number</b>:
<CodeSpace>
{`
const fruits = ["Apple", "Bananas", "Oranges"];
let fruit = fruits[0];
`}
</CodeSpace>
<Hint>
Array indexes start with 0.
</Hint>
</Section>

<SectionHeader>Changing an Array Element</SectionHeader>
<Section>
This example changes the value of the first element in fruits:
<CodeSpace>
{`
const fruits = ["Apple", "Bananas", "Oranges"];
fruits[0] = "Lemon";
`}
</CodeSpace>
</Section>

<SectionHeader>JavaScript Array Methods</SectionHeader>
<Section>
<Table columns={arrayColumn} data={arrayData}/>
</Section>

<SectionHeader>JavaScript Array Search Methods</SectionHeader>
<Section>
<Table columns={arraySearchColumn} data={arraySearchData}/>
</Section>

<SectionHeader>JavaScript Array Sort Methods</SectionHeader>
<Section>
<Table columns={arraySortColumn} data={arraySortData}/>
</Section>
    </Article>
</>
);