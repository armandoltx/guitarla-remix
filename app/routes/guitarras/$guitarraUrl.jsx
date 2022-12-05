
export async function loader({params}) {
  // console.log(request)
  console.log(params)

  return { guitarraUrl } = params
}

const Guitarra = () => {
  return (
    <div>
      $guitarraUrl
    </div>
  );
};

export default Guitarra;