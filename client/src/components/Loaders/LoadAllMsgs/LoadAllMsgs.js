import { useDispatch } from 'react-redux';
import { addAllMessages } from '../../../js/actions/index'
import { orderBy } from 'lodash';


const LoadAllMsgs = (props) => {
  const dispatch = useDispatch()

  let data = orderBy(props.messages, ['Created_Time'], ['asc']);
  dispatch(addAllMessages(data));
}

export default LoadAllMsgs;

