import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { StyledCodeSpace } from './styled'

const CodeSpace = ({ children }) => {
    const theme = useTheme();

  const keywordGroups = {
    
    Yellow: ['[a-zA-Z0-9]+\\(\\)'],
    Purple: ['function', 'return', 'if', 'else', 'for', 'while', '{', '}', '\\(', '\\)'],
    Orange: ['".*?"', "'.*?'"],
    LightBlue: ['!DOCTYPE html', 'id', 'type', 'onclick', 'document', 'src'],
    Blue: ['var', 'let', 'const', 'script', 'head', 'body', 'html', 'h1', 'h2', 'h3', '\\bp\\b', 'button', 'title'],
    Green: [],
    Grey: ['[0-9]+\\|', '<', '>', '/'],
  };

  const buildRegex = () => {
    const groups = Object.values(keywordGroups).flat();
    return new RegExp(`(${groups.join('|')})`, 'g');
  };

  const colors = {
    default: theme.CodeSpace.default,
    Orange: theme.CodeSpace.Orange,
    Blue: theme.CodeSpace.Blue,
    LightBlue: theme.CodeSpace.LightBlue,
    Purple: theme.CodeSpace.Purple,
    Green: theme.CodeSpace.Green,
    Yellow: theme.CodeSpace.Yellow,
    Grey: theme.CodeSpace.Grey,
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