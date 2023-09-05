# Write your MySQL query statement below
select D.name as Department, E.name as Employee, E.salary as Salary
from Employee E
left join Department D on 
E.departmentId=D.id
WHERE(departmentId, salary) IN (SELECT departmentId,MAX(salary) FROM Employee GROUP BY departmentId) ;