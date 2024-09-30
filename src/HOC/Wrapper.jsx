const wrapper = (WrappedComponent) => {
  return function CenteredContentWrapper(props) {
    return (
      <div
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default wrapper;
