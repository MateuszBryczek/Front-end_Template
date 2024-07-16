import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { StyledCodeSpace } from './styled'

const CodeSpace = ({ children }) => {
    const theme = useTheme();

const keywordGroups = {
  variables: ['var', 'let', 'const'],
  functions: ['function', 'return'],
  conditionals: ['if', 'else', 'for', 'while'],
  symbols: ['\\(', '\\)', '\\{', '\\}', '\\[', '\\]', '<', '>'],
  strings: ['".*?"', "'.*?'"],
};

const buildRegex = () => {
  const groups = Object.values(keywordGroups).flat();
  return new RegExp(`(${groups.join('|')})`, 'g');
};

  const colors = {
    variables: theme.CodeSpace.variables,
    functions: theme.CodeSpace.functions,
    conditionals: theme.CodeSpace.conditionals,
    symbols: theme.CodeSpace.symbols,
    strings: theme.CodeSpace.strings,
    default: theme.CodeSpace.default,
  };

  const splitText = (text) => {
    const regex = buildRegex();
    return text.split(regex);
  };

  const getCategory = (segment) => {
    for (const [category, keywords] of Object.entries(keywordGroups)) {
      if (keywords.some(keyword => new RegExp(keyword).test(segment))) {
        return category;
      }
    }
    return null;
  };

  const lines = children.split('\n');

  return (
    <StyledCodeSpace>
      {lines.map((line, lineIndex) => {
        const segments = splitText(line);

        return (
          <div key={lineIndex}>
            {segments.map((segment, index) => {
              const category = getCategory(segment);
              const color = colors[category] || colors.default;
              
              return (
                <span key={index} style={{ color }}>
                  {segment}
                </span>
              );
            })}
          </div>
        );
      })}
    </StyledCodeSpace>
  );
};

CodeSpace.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeSpace;