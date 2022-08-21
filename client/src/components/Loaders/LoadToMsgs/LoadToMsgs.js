import { useDispatch } from 'react-redux';
import { addPrevMessagesTo } from '../../../js/actions/index'
import { orderBy } from 'lodash';


const LoadToMsgs = (props) => {
  const dispatch = useDispatch()

  let data = orderBy(props.msgTo, ['Created_Time'], ['asc']);
  dispatch(addPrevMessagesTo(data));
}

export default LoadToMsgs;

