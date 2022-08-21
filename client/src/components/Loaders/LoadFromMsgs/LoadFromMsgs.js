import { useDispatch } from 'react-redux';
import { addPrevMessagesFrom } from '../../../js/actions/index'
import { orderBy } from 'lodash';


const LoadFromMsgs = (props) => {
  const dispatch = useDispatch()

  let data = orderBy(props.msgFrom, ['Created_Time'], ['asc']);
  dispatch(addPrevMessagesFrom(data));
}

export default LoadFromMsgs;

