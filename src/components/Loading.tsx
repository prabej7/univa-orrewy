

const Loading = () => {
    return (
        <div className="absolute z-10 h-screen w-screen flex justify-center items-center ">
            <p className="text-white text-2xl flex items-center gap-2">
                <span className="loading loading-infinity loading-lg text-white"></span>
                Loading...
            </p>
        </div>
    )
}

export default Loading
