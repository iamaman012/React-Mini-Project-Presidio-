export const ApiState = (Component) => {
  return (props) => {
    if (props.isLoading)
      return <h3 className="text-center mt-4">.....Loading</h3>;
    if (props.isError)
      return (
        <>
          {console.log(props.error)}
          <h4 className="text-center">Something Went Wrong....</h4>
          <h2 className="text-center">404</h2>
        </>
      );
    if (props.flag) return <Component country={props.data.data[0]} />;

    return <Component {...props} />;
  };
};
