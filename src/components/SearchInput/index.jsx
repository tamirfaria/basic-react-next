import './styles.css'

export const SearchInput = ({ onChange, value }) => {
  return (
    <div className='search-input-container'>
      <input
        onChange={onChange}
        value={value}
        type='search'
        className='search-input'
        placeholder='Pesquisar'
      />
    </div>
  )
}