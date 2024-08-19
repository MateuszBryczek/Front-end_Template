import { 
    ArticleHeader,
    SectionHeader,
    Article, 
    Section,
    Highlighted,
    Hint,
} from "../../../../../common/Section";
import Table from "../../../../../common/Tabele";
import CodeSpace from "../../../../CodeSpace/CodeSpace";

const arithmeticColumns = ['Operator', 'Description', 'Example'];
const arithmeticData = [
    { Operator: '+', Description: 'Addition', Example: 'x + y' },
    { Operator: '-', Description: 'Subtraction', Example: 'x - y' },
    { Operator: '*', Description: 'Multiplication', Example: 'x * y' },
    { Operator: '**', Description: 'Exponentiation', Example: 'x ** y' },
    { Operator: '/', Description: 'Division', Example: 'x / y' },
    { Operator: '%', Description: 'Modulus', Example: 'x % y' },
    { Operator: '++', Description: 'Increment', Example: 'x ++' },
    { Operator: '--', Description: 'Decrement', Example: 'x --' },
];
const assignmentColumns = ['Operator', 'Same As', 'Example'];
const assignmentData = [
    { Operator: '=', 'Same As': 'x = y', Example: 'x = y' },
    { Operator: '+=', 'Same As': 'x = x + y', Example: 'x =+ y' },
    { Operator: '-=', 'Same As': 'x = x - y', Example: 'x -= y' },
    { Operator: '*=', 'Same As': 'x = x * y', Example: 'x *= y' },
    { Operator: '/=', 'Same As': 'x = x / y', Example: 'x /= y' },
    { Operator: '%=', 'Same As': 'x = x % y', Example: 'x %= y' },
    { Operator: '**=', 'Same As': 'x = x ** y', Example: 'x **= y' },
];
const shiftAssignmentColumns = ['Operator', 'Same As', 'Example'];
const shiftAssignmentData = [
    { Operator: '<<=', 'Same As': 'x = x << y', Example: 'x <<= y' },
    { Operator: '>>=', 'Same As': 'x = x >> y', Example: 'x >>= y' },
    { Operator: '>>>=', 'Same As': 'x = x >>> y', Example: 'x >>>= y' },
];
const bitwiseAssignmentColumns = ['Operator', 'Same As', 'Example'];
const bitwiseAssignmentData = [
    { Operator: '&=', 'Same As': 'x = x & y', Example: 'x &= y' },
    { Operator: '^=', 'Same As': 'x = x ^ y', Example: 'x ^= y' },
    { Operator: '|=', 'Same As': 'x = x | y', Example: 'x |= y' },
];
const logicalAssignmentColumns = ['Operator', 'Same As', 'Example'];
const logicalAssignmentData = [
    { Operator: '&&=', 'Same As': 'x = x && (x = y)', Example: 'x &&= y' },
    { Operator: '||=', 'Same As': 'x = x || (x = y)', Example: 'x ||= y' },
    { Operator: '??=', 'Same As': 'x = x ?? (x = y)', Example: 'x ??= y' },
];
const comparisonColumns = ['Operator', 'Description', 'Example'];
const comparisonData = [
    { Operator: '==', Description: 'Equality', Example: 'x == y' },
    { Operator: '!=', Description: 'Inequality', Example: 'x != y' },
    { Operator: '===', Description: 'Identity', Example: 'x === y' },
    { Operator: '!==', Description: 'Non-identity', Example: 'x !== y' },
    { Operator: '>', Description: 'Greater tnan operator', Example: 'x > y' },
    { Operator: '>=', Description: 'Greater tnan or equal', Example: 'x >= y' },
    { Operator: '<', Description: 'Less than', Example: 'x < y' },
    { Operator: '<=', Description: 'Less than or equal', Example: 'x <= y' },
];
const logicalColumns = ['Name', 'Operator', 'Usage'];
const logicalData = [
    { Name: 'Logical AND', Operator: '&&', Usage: 'return true if both are true' },
    { Name: 'Logical OR', Operator: '||', Usage: 'return true if either is true' },
    { Name: 'Logical NOT', Operator: '!', Usage: 'return true if is not true' },
];
const bitwiseColumns = ['Name', 'Operator', 'Usage'];
const bitwiseData = [
    { Name: 'AND', Operator: '&', Usage: '' },
    { Name: 'OR', Operator: '|', Usage: '' },
    { Name: 'XOR', Operator: '^', Usage: '' },
    { Name: 'NOT', Operator: '~', Usage: '' },
];

export const JavaScriptOperators = () => (
<>
    <ArticleHeader id="7">JavaScript Operators</ArticleHeader>
        <Article>
<SectionHeader>JavaScript Arithmetic Operators</SectionHeader>
<Section>
<b>Arithmetic</b> operators perform arithmetic on numbers (literals or variables).
<Table columns={arithmeticColumns} data={arithmeticData}/>
The <b>exponentiation</b> operator <Highlighted>**</Highlighted> raises the first operand to the power of the second operand. Produces the same result as <Highlighted>Math.pow(x,y)</Highlighted>
<Hint>
Operator precedence describes the order in which operations are performed in an <b>arithmetic expression</b>.
</Hint>
</Section>

<SectionHeader>JavaScript Assignment Operators</SectionHeader>
<Section>
Assignment operators assign values to JavaScript variables.
<Table columns={assignmentColumns} data={assignmentData}/>
</Section>

<SectionHeader>JavaScript Shift Assignment Operators</SectionHeader>
<Section>
<Table columns={shiftAssignmentColumns} data={shiftAssignmentData}/>
</Section>

<SectionHeader>JavaScript Bitwise Assignment Operators</SectionHeader>
<Section>
<Table columns={bitwiseAssignmentColumns} data={bitwiseAssignmentData}/>
</Section>

<SectionHeader>JavaScript Logical Assignment Operators</SectionHeader>
<Section>
<Table columns={logicalAssignmentColumns} data={logicalAssignmentData}/>
</Section>

<SectionHeader>JavaScript Comparison Operators</SectionHeader>
<Section>
A <b>comparison operator</b> used to compare strings, numbers, Booleans, or object values. Returns a <b>Boolean</b> ( true or false).
<Table columns={comparisonColumns} data={comparisonData}/>
</Section>

<SectionHeader>JavaScript Logical Operators</SectionHeader>
<Section>
<b>Logical operators</b> are commonly used with <b>Booleans</b>. Returns a <b>Boolean</b> value ( true or false).
<Table columns={logicalColumns} data={logicalData}/>
</Section>

<SectionHeader>JavaScript Bitwise Operators</SectionHeader>
<Section>
<b>Logical operators</b> are commonly used with <b>Booleans</b>. Returns a <b>Boolean</b> value ( true or false).
<Table columns={bitwiseColumns} data={bitwiseData}/>
</Section>
        </Article>
</>
);