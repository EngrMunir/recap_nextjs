
const HomePage = async() => {
const res = await fetch("http://localhost:5000/products",{
  next:{
    revalidate:5,
  }
});
const products = await res.json();
  return (
    <div>
      <h1 className='text-2xl text-center'>Next js image optimaization</h1>
    </div>
  );
};

export default HomePage;