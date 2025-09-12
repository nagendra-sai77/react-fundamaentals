function Profile() {
    const name="pakkurthi"
    const age=22
    const isStudent=true
  return (
  <div><p>Profile Page</p>
    <h1>{name}</h1> 
    <h2>{age}</h2>
    <h3>{isStudent ? "student":"not a student"}</h3>
</div>
)}
export default Profile;