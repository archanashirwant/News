// __mocks__/Provider.jsx
import context from 'Helper';

export const MyContext = ({
  Consumer(props) {
    return props.children(context)
  } 
})