import '../../CSS/AdminHeader.css'

const AdminHeader = () => {
    return (
        <div className="adminheader">
            NAVIGATION
            <a href="/admin">Admins</a>
            <a href="/admin/execs">Execs</a>
            <a href="/admin/cochairs">CoChairs</a>
            <a href="/admin/create-blog">New Blog</a>
        </div>
    )
}
export default AdminHeader;