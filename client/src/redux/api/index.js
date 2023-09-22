import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
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
export const signin = (user) => api.post('/user/signin', user);
export const signup = (user) => api.post('/user/signup', user);

// university actions
export const getAllUniversities = () => api.get('/university');
export const getUniversityById = (id) => api.get(`/university/get/${id}`);
export const registerUniversity = (university) => api.post('/university/register', university);
export const updateUniversity = (id, university) => api.put(`/university/update/${id}`, university);
export const updateUniversityStatus = (id, university) => api.put(`/university/update/status/${id}`, university);
export const deleteUniversity = (id) => api.delete(`/university/delete/${id}`);

// student actions
export const getAllStudents = () => api.get('/student');
export const getStudentById = (id) => api.get(`/student/get/${id}`);
export const getStudentsByUniversityId = (id) => api.get(`/student/university/${id}`);
export const registerStudent = (student) => api.post('/student/register', student);
export const updateStudent = (id, student) => api.put(`/student/update/${id}`, student);
export const updateStudentStatus = (id, student) => api.put(`/student/update/status/${id}`, student);
export const deleteStudent = (id) => api.delete(`/student/delete/${id}`);

// university admin actions
export const getAllUniversityAdmins = () => api.get('/universityAdmin');
export const getUniversityAdminById = (id) => api.get(`/universityAdmin/get/${id}`);
export const getUniversityAdminByUniversityId = (id) => api.get(`/universityAdmin/university/${id}`);
export const updateUniversityAdmin = (id, universityAdmin) => api.put(`/universityAdmin/update/${id}`, universityAdmin);
export const updateUniversityAdminStatus = (id, universityAdmin) => api.put(`/universityAdmin/update/status/${id}`, universityAdmin);
export const deleteUniversityAdmin = (id) => api.delete(`/universityAdmin/delete/${id}`);

// spoc actions
export const getAllSpocs = () => api.get('/spoc');
export const getSpocById = (id) => api.get(`/spoc/get/${id}`);
export const getSpocsByUniversityId = (id) => api.get(`/spoc/university/${id}`);
export const updateSpoc = (id, spoc) => api.put(`/spoc/update/${id}`, spoc);
export const updateSpocStatus = (id, spoc) => api.put(`/spoc/update/status/${id}`, spoc);
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
export const updateProjectStatus = (id, project) => api.put(`/project/update/status/${id}`, project);
export const deleteProject = (id) => api.delete(`/project/delete/${id}`);
export const likeProject = (id) => api.put(`/project/like/${id}`);
export const unlikeProject = (id) => api.put(`/project/unlike/${id}`);
export const reviewProject = (id, review) => api.put(`/project/review/${id}`, review);
export const commentProject = (id, comment) => api.put(`/project/comment/${id}`, comment);
export const shareProject = (id, share) => api.put(`/project/share/${id}`, share);

// cloudinary actions
export const uploadFile = (file) => api.post('/upload/cloud', file);
