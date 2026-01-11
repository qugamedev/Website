const PageNotFound = () => {
    return (
        <div className="flex h-screen items-center justify-center text-center text-white bg-dark-colour">
            <div>
                <p className="text-6xl font-bold font-archivo pb-5">404 Error</p>
                <p className="text-2xl">Seems that the page you're looking for doesn't exist!
                    <br/>Click <a href="./home" className="text-purple-600">here</a> to return to the homepage.</p>
            </div>
        </div>
    );
};

export default PageNotFound;