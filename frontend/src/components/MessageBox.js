import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'danger'}>{props.children}</Alert>;
}
