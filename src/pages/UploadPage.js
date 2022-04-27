const UploadPage = () => {
    return(
        <div className="upload-page">
        <br />
        <h1>Upload video</h1>
        <div className='container'>
          <form>
            <div className='section'>
              <div className="image-upload"></div>
              <div className="form-section">
                <div className='section input-section'>
                  <label className="bold">Caption</label>
                  <input
                    className='input'
                    name='caption'
                  />
                </div>
                <div className="break"></div>
                <div className='section input-section'>
                  <label className="bold">Video Url</label>
                  <input
                    className='input'
                    name='video'
                  />
                </div>
              </div>
            </div>			
            <button>Post</button>
          </form>
        </div>
    </div>
    )
}

export default UploadPage