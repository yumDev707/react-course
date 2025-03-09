import PropTypes, { func } from 'prop-types';

export const GifItem = ({title, url, id}) => {
  return (
    <div className="card">
          <img src={url} alt={title}/>
          <p>{title}</p>  
    </div>
  )
}

GifItem.protoType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}