import styled, { css } from 'styled-components'

const is = (name) => (...args) => props => props[name] && css(...args);

const Flex = styled.div`
    display:flex;
    order: 0;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
    /******************************** flex-direction ********************************/
    ${is('row')`
        flex-direction:row;
    `}  
    ${is('column')`
        flex-direction:column;
    `} 
    /******************************** Wrap ********************************/
    ${is('nowrap')`
    flex-wrap: nowrap; /* default */
    `};
    ${is('wrap')`
        flex-wrap: wrap;
    `};
    ${is('wrapReverse')`
        flex-wrap: wrap-reverse;
    `};
    /******************************** Justify Content ********************************/
    ${is('justifyStart')`
        justify-content: flex-start; /* default */
    `};
    ${is('justifyEnd')`
        justify-content: flex-end;
    `};
    ${is('justifyCenter')`
        justify-content: center;
    `};
    /******************************** Align content ********************************/
    ${is('contentStart')`
        align-content: flex-start;
    `};
    ${is('contentEnd')`
        align-content: flex-end;
    `};
    ${is('contentCenter')`
        align-content: center;
    `}
    /******************************** Align items ********************************/
    ${is('alignStart')`
        align-items: flex-start;
    `};
    ${is('alignEnd')`
        align-items: flex-end;
    `};
    ${is('alignCenter')`
        align-items: center;
    `};
    ${is('center')`
        align-items: center;
        justify-content: center;
    `};
    /******************************** Order ********************************/
    ${is('order')`
        order: ${props => props.order};
    `};
    /******************************** flex-basis ********************************/
    ${is('basis')`
        flex-basis: ${props => props.basis};
    `};
    /******************************** flex-grow ********************************/
    ${is('grow')`
        flex-grow: ${props => props.grow ? props.grow : 1};
    `};
    /******************************* flex-shrink *******************************/
    ${is('shrink')`
        flex-shrink: ${props => props.shrink};
    `};
    ${is('noShrink')`
        flex-shrink: 0;
    `};
`
export default Flex;