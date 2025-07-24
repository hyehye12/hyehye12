export default function Bootstrap() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></input>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        ></input>
      </div>

      <div className="mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        ></input>
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check Me Out
        </label>
      </div>

      <button type="submit" className="btn btn-info">
        Submit
      </button>
    </form>
  );
}

// mb-3 margin bottom 3 pb padding bottom m 4 margin all
//className="btn btn-info 부트스트랩에서 버튼 디자인 가지고 오기
