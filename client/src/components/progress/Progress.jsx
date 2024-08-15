export default function Progress({ progress }) {
    return (
        <>
            <div className="progress mt-3">
                <div className="progress-bar" role="progressbar"  style={{ width: `${progress}` } }>
                    {progress}%
                </div>
            </div>
          
        </>
    );
}