import { connect } from 'react-redux';
import Matrix from '../components/Matrix';

const mapStateToProps = ({ game: { matrix, position } }) => ({
  id: 'game',
  matrix,
  position
});

export default connect(mapStateToProps, () => ({}))(Matrix);
