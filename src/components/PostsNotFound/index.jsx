import './styles.css'
import notFoundImage from '../../assets/not-found.png'

export const PostsNotFound = () => {
  return (
    <div className='posts-not-found-container'>
      <h1>Posts não encontrados</h1>
      <img src={notFoundImage} alt='Posts não encontrados' width='150px' height='150px'/>
    </div>
  );
};
