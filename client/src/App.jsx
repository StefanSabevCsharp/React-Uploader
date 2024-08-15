import FileUpload from "./components/fileUpload/FileUpload"
import Upload from "./components/upload/Upload"


function App() {

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="w-100" style={{maxWidth: "800"}}>
        <FileUpload />
        <Upload />
      </div>
    </div>

  )
}

export default App
