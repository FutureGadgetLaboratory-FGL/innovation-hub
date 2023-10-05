import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://student-innovation-hub-server.onrender.com' : 'http://localhost:5000/',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
);

// user actions
export const signin = (user) => api.post('/auth/signin', user);
export const signup = (user) => api.post('/auth/signup', user);

// university actions
export const getAllUniversities = () => api.get('/university');
export const getUniversityById = (id) => api.get(`/university/get/${id}`);
export const getUniversitiesByFilter = (filter) => api.post(`/university/filter`, filter);
export const registerUniversity = (university) => api.post('/university/register', university);
export const updateUniversity = (id, university) => api.put(`/university/update/${id}`, university);
export const updateUniversityStatus = (id, status, verifiedBy) => api.put(`/university/update/status/${id}`, { status, verifiedBy });
export const deleteUniversity = (id) => api.delete(`/university/delete/${id}`);

// student actions
export const getAllStudents = () => api.get('/student');
export const getStudentById = (id) => api.get(`/student/get/${id}`);
export const getStudentsByUniversityId = (id) => api.get(`/student/university/${id}`);
export const getStudentsByFilter = (filter) => api.post('/student/filter', filter);
export const registerStudent = (student) => api.post('/student/register', student);
export const updateStudent = (id, student) => api.put(`/student/update/${id}`, student);
export const updateStudentStatus = (id, status, verifiedBy) => api.put(`/student/update/status/${id}`, { status, verifiedBy });
export const deleteStudent = (id) => api.delete(`/student/delete/${id}`);

// university admin actions
export const getAllUniversityAdmins = () => api.get('/universityAdmin');
export const getUniversityAdminById = (id) => api.get(`/universityAdmin/get/${id}`);
export const getUniversityAdminsByUniversityId = (id) => api.get(`/universityAdmin/university/${id}`);
export const updateUniversityAdmin = (id, universityAdmin) => api.put(`/universityAdmin/update/${id}`, universityAdmin);
export const updateUniversityAdminStatus = (id, status) => api.put(`/universityAdmin/update/status/${id}`, { status });
export const deleteUniversityAdmin = (id) => api.delete(`/universityAdmin/delete/${id}`);

// spoc actions
export const getAllSpocs = () => api.get('/spoc');
export const getSpocById = (id) => api.get(`/spoc/get/${id}`);
export const getSpocsByUniversityId = (id) => api.get(`/spoc/university/${id}`);
export const updateSpoc = (id, spoc) => api.put(`/spoc/update/${id}`, spoc);
export const updateSpocStatus = (id, status, verifiedBy) => api.put(`/spoc/update/status/${id}`, { status, verifiedBy });
export const deleteSpoc = (id) => api.delete(`/spoc/delete/${id}`);

// super admin actions
export const getAllSuperAdmins = () => api.get('/superAdmin');
export const getSuperAdminById = (id) => api.get(`/superAdmin/get/${id}`);
export const setSuperAdminPassword = (id, superAdmin) => api.put(`/superAdmin/setpassword/${id}`, superAdmin);

// project actions
export const createProject = (project) => api.post('/project/create', project);
export const getAllProjects = () => api.get('/project/all');
export const getProjectById = (id) => api.get(`/project/get/${id}`);
export const getProjectsByStudentId = (id) => api.get(`/project/student/${id}`);
export const getProjectsByUniversityId = (id) => api.get(`/project/university/${id}`);
export const updateProject = (id, project) => api.put(`/project/update/${id}`, project);
export const updateProjectStatus = (id, status, verifiedBy, verifiedByType) => api.put(`/project/update/status/${id}`, { status, verifiedBy, verifiedByType });
export const deleteProject = (id) => api.delete(`/project/delete/${id}`);
export const likeProject = (id) => api.put(`/project/like/${id}`);
export const unlikeProject = (id) => api.put(`/project/unlike/${id}`);
export const reviewProject = (id, review) => api.put(`/project/review/${id}`, review);
export const commentProject = (id, comment) => api.put(`/project/comment/${id}`, comment);
export const shareProject = (id, share) => api.put(`/project/share/${id}`, share);

// collaboration actions
export const createCollaboration = (collaboration) => api.post('/collaboration/create', collaboration);
export const getAllCollaborations = () => api.get('/collaboration/all');
export const getCollaborationById = (id) => api.get(`/collaboration/get/${id}`);
export const getCollaborationsByStudentId = (id) => api.get(`/collaboration/student/${id}`);
export const getCollaborationsByUniversityId = (id) => api.get(`/collaboration/university/${id}`);
export const acceptCollaboration = (id) => api.put(`/collaboration/accept/${id}`);
export const rejectCollaboration = (id) => api.put(`/collaboration/reject/${id}`);


// cloudinary actions
export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'student-innovation-hub');
    formData.append('cloud_name', 'dlv1wdngt');
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/dlv1wdngt/image/upload', formData);
    return data;
}
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'student-innovation-hub');
    formData.append('cloud_name', 'dlv1wdngt');
    formData.append('resource_type', 'raw');

    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dlv1wdngt/raw/upload', formData);
        return response.data;
    } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        throw error;
    }
};
