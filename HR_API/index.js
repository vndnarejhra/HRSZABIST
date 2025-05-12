const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try{
        res.json('Welcome to HR API')
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/emp', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM employees')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/emp-count', async (req, res) => {
    try{
        const result = await pool.query('SELECT COUNT(*) FROM employees')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/TotalDepartment', async (req, res) => {
    try{
        const result = await pool.query('SELECT COUNT(*) FROM departments')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q', async (req, res) => {
    try{
        const result = await pool.query('SELECT e.employee_id,e.first_name,e.last_name,l.postal_code,c.country_name from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q40', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name ,e.last_name, e.salary ,l .* ,c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d.location_id = d. location_id join countries c On l.country_id = c.country_id limit 5;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q41', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e .* from job_history jh join employees eOn jh.employee_id = e.employee_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q4', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e .* from job_history jh join employees eOn jh.employee_id = e.employee_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q42', async (req, res) => {
    try{
        const result = await pool.query('select e .* ,jh .* from employees e join job_history jh On e.employee_id = jh.employee_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q43', async (req, res) => {
    try{
        const result = await pool.query(' select e .* ,jh .* ,d.department_name from employees e join job_history jh On e.employee_id = jh.employee_id join departments d On jh.department_id = d.department_id limit 5;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q44', async (req, res) => {
    try{
        const result = await pool.query('  select e.first_name,e.salary,jh .* ,d.department_name,l .* from employees e join job_history jh On e.employee_id = jh.employee_id join departments d On jh.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


app.get('/Q45', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name, e.last_name, e.salary,jh .* ,c.country_name from employees e join job_history jh On e.employee_id = jh.employee_id join departments d On jh.department_id = d.department_id join locations l On d. location_id = l.location_id join countries c On l.country_id = c.country_id limit 2; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q46', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,d .* from job_history jh join employees e On jh.employee_id = e.employee_id join departments d On jh.department_id = d.department_id limit 2; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q47', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e.first_name, e.last_name,e.salary, j .* from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id = j.job_id limit 2; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q48', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,j .* ,d.department_name from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id=j.job_id join departments d On jh.department_id = d.department_id limit 2; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q49', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,j .* ,l .* from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id = j.job_id join departments d On jh.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q50', async (req, res) => {
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,j .* ,c.country_name from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id = j.job_id join departments d On jh.department_id = d.department_id join locations l On d.location_id = l.location_id join countries c On l.country_id = c.country_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q51', async (req, res) => {
    try{
        const result = await pool.query('select r .* , c.country_name, l .* from regions r join countries c On r.region_id = c.region_id join locations l On c.country_id = l.country_id limit 2 ;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q52', async (req, res) => {
    try{
        const result = await pool.query('select c.country_name ,r .* , l .* from countries c join regions r On c.region_id = r.region_id join locations l On c.country_id = l.country_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q53', async (req, res) => {
    try{
        const result = await pool.query(' select l .* , c.country_name,r .* from locations l join countries c On l.country_id = c.country_id join regions r On c.region_id = r.region_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q54', async (req, res) => {
    try{
        const result = await pool.query('select d.department_name, e.first_name, e.salary,l .* from departments d join employees e On d.department_id = e.department_id join locations l On d. location_id = l.location_id limit 2 ;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q55', async (req, res) => {
    try{
        const result = await pool.query('select e. first_name, e.salary, d.department_name, l .* ,c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d. location_id = d. location_id join countries c On l.country_id =l.country_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q56', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name as "employee_name",e.salary,e.manager_id,m.first_name as "manager_name" ,d.department_name, l .* from employees e left join employees m On e.manager_id = m.employee_id join departments d On e.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q57', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name,e.last_name, e.salary,j.job_title,d.department_name,l .* from employees e join jobs j On e.job_id = j.job_id join departments d On e.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q58', async (req, res) => {
    try{
        const result = await pool.query('select e. first_name as "Employee_name", e.salary, j. job_title, d. department_name , e.manager_id, m.first_name as "Manager_name" from employees e join jobs j On e. job_id = j. job_id join departments d On e. department_id = d.department_id left join employees m On e.manager_id = m.employee_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q59', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name as "Employee_name",e.salary,j.job_title,d.department_name ,e.manager_id,m.first_name as "Manager_name",l .* from employees e join jobs j On e. job_id = j. job_id join departments d On e.department_id = d.department_id left join employees m On e.manager_id = m.employee_id join locations l On d. location_id = l.location_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q60', async (req, res) => {
    try{
        const result = await pool.query('select c.country_name, r.region_id from countries c join regions r On c.region_id = r.region_id where r.region_id = 1;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q61', async (req, res) => {
    try{
        const result = await pool.query('select d. department_name, l.city from departments d join locations l On d. location_id = l. location_id where l.city like\'N%\';')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q62', async (req, res) => {
    try{
        const result = await pool.query('select e. first_name as "Employee_name", d.department_name, e. manager_id, m. first_name as "Manager_name" ,e. commission_pct from employees e join departments d On e. department_id= d.department_id left join employees m On e.manager_id = m. employee_id where e. commission_pct > 0.15 limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q63', async (req, res) => {
    try{
        const result = await pool.query('select job_id from employees where manager_id is not null;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q64', async (req, res) => {
    try{
        const result = await pool.query(' select l.postal_code , r. region_name from locations l join countries c On l.country_id = c. country_id join regions r On c.region_id = r.region_id where r.region_name like %Asia limit 2')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q65', async (req, res) => {
    try{
        const result = await pool.query('select e. first_name, d. department_name, e.commission_pct from departments d join employees e On e. department_id = d. department_id where e. commission_pct < (select avg(commission_pct) from employees) limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q66', async (req, res) => {
    try{
        const result = await pool.query('select j.job_title, e.salary, d.department_name from employees e join jobs j On e. job_id = j. job_id left join departments d On e.department_id = d.department_id where e.salary > (select avg(ee. salary)from employees ee where ee. department_id = e.department_id) limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q67', async (req, res) => {
    try{
        const result = await pool.query('select employee_id, department_id from employees where department_id is null ;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


app.get('/Q68', async (req, res) => {
    try{
        const result = await pool.query('select e. first_name from employees e join job_history jh on e. employee_id= jh. employee_id group by e. first_name having count(distinct jh. job_id) > 1 limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


app.get('/Q69', async (req, res) => {
    try{
        const result = await pool.query('select department_id , count(employee_id) as "Total Employees" from employees group by department_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q70', async (req, res) => {
    try{
        const result = await pool.query(' select job_id , sum(salary) as "Total salary" from employees group by job_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q71', async (req, res) => {
    try{
        const result = await pool.query('select department_id ,avg(commission_pct) as "Avg_Commission_pct" from employees group by department_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q72', async (req, res) => {
    try{
        const result = await pool.query('select max(e.salary) as "Max Salary", c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d. location_id = l. location_id join countries c On l.country_id = c. country_id group by c.country_name limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q74', async (req, res) => {
    try{
        const result = await pool.query(' select d.department_id , c.country_name, l.city, count(e.employee_id) as "Total Employees" from employees e join departments d On e.department_id = d. department_id join locations l On d. location_id = l. location_id join countries c On l.country_id = c.country_id group by c.country_name, l.city, d.department_id having count(e. employee_id)>=2 limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

app.get('/Q76', async (req, res) => {
    try{
        const result = await pool.query(' select concat(e.first_name,e. last_name) as "full_name",e. salary,e.department_id from employees e where salary = (select min(salary) from employees where department_id = e.department_id) limit 2; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q78', async (req, res) => {
    try{
        const result = await pool.query(' select * from employees where salary=(select max(salary) from employees where salary<(select max(salary)from employees where salary<(select max(salary)from employees))); ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q79', async (req, res) => {
    try{
        const result = await pool.query(' select e.employee_id , concat(e.first_name,e. last_name)as "Full_name",e.salary from employees e where salary >(select avg(salary) from employees) and e.department_id In(select distinct e.department_id from employees where e.first_name like \'%J%\') limit 5; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q80', async (req, res) => {
    try{
        const result = await pool.query('  select concat(e.first_name, \' \', e.last_name)as "Full_name",e.employee_id,j.job_title,l.city from employees e join jobs j On e.job_id= j.job_id join departments d On e.department_id = d.department_id join locations l On d. location_id = l.location_id where l.city like \'Toronto\'limit 2; ')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
app.get('/Q4', async (req, res) => {
    try{
        const result = await pool.query('  select jh .* ,e .* from job_history jh join employees eOn jh.employee_id = e.employee_id limit 2;')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connection Successfully on port = ${port}`)
})