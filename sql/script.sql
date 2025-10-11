--create database hierarchy_db;
-- Drop table if it already exists (for re-runs)
DROP TABLE IF EXISTS workday;

-- Create table
--CREATE TABLE workday (
--    id SERIAL PRIMARY KEY,
--    employee_name VARCHAR(100) NOT NULL,
--    manager_id INT,
--    manager_name VARCHAR(100)
--);

--Insert sample data
--INSERT INTO public.workday (employee_name, manager_id, manager_name)
--VALUES
--    ('Mary', 11, 'John'),               -- Mary reports to John (John not in table)
--    ('Marcia', 1, 'Mary'),              -- Marcia reports to Mary
--    ('Alex', 1, 'Mary'),                -- Alex reports to Mary
--    ('Robert', 1, 'Mary'),              -- Robert reports to Mary
--    ('Lucas', 2, 'Marcia'),             -- Lucas reports to Marcia
--    ('Daniel', 2, 'Marcia'),            -- Daniel reports to Marcia
--    ('Patricia', 1, 'Mary'),            -- Patricia reports to Mary
--    ('Ana', 2, 'Marcia'),               -- Ana reports to Marcia
--    ('Carlos', 1, 'Mary'),              -- Carlos reports to Mary
--    ('Fernanda', 2, 'Marcia');          -- Fernanda reports to Marcia

-- Check inserted data
--SELECT * FROM workday;

with recursive employee_hierarchy as (
-- Base case: start with all employees
select
	id,
	employee_name,
	manager_id,
	manager_name,
	employee_name as root_employee,
	manager_name as current_manager
from
	public.workday
union all
-- Recursive case: follow manager relationships upward
select
	w.id,
	w.employee_name,
	w.manager_id,
	w.manager_name,
	eh.root_employee,
	w.manager_name as current_manager
from
	public.workday w
inner join employee_hierarchy eh
        on
	w.id = eh.manager_id 
)
select
	root_employee as employee,
	STRING_AGG(current_manager, ' -> ' order by current_manager) as management_chain
from
	employee_hierarchy
where
	current_manager is not null
group by
	root_employee
order by
	employee;

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

with recursive employee_hierarchy as (
-- Base case: start with all employees
select
	w.id,
	w.employee_name,
	w.manager_id,
	w.manager_name,
	w.id as root_id,
	w.employee_name as root_employee,
	w.manager_id as current_manager_id
from
	public.workday w
union all
-- Recursive step: find the manager based on ID
select
	eh.id,
	eh.employee_name,
	w.manager_id,
	w.manager_name,
	eh.root_id,
	eh.root_employee,
	w.manager_id as current_manager_id
from
	employee_hierarchy eh
join workday w
        on
	w.id = eh.manager_id
)
select
	e.root_employee as employee,
	STRING_AGG(e.manager_name, ' -> ' order by e.id) as management_chain
from
	employee_hierarchy e
where
	e.employee_name is not null
group by
	e.root_employee
order by
	e.root_employee;
