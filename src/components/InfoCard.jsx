// Displays a single user's information in a card format.
function InfoCard({ user }) {
    return <div className="info-card">
        <div className="name-card">
            <h2>Name: {user.name} </h2>
        </div>
        <div className="email-card">
            <h3>Email: {user.email} </h3>
        </div>
        <div className="companyName-card">
            <h3>Company Name: {user.company.name} </h3>
        </div>
    </div>
}

export default InfoCard