import { connect } from 'react-redux';
import Matrix from '../components/Matrix';

const mapStateToProps = ({ player: { matrix, position } }) => ({
  id: 'player',
  matrix,
  position
});

export default connect(mapStateToProps, () => ({}))(Matrix);
