## 12 Factor App
 
 A set of recommendations that have proven to be successful for web apps or any services deployed on the web.

1)Codebase- The first principle emphasizes using a single codebase for each application, tracked in a version control system like Git.The code should only have one repository, and the various environments like development, staging, and production should be managed through different branches or configurations within the same repository.

2)Dependencies - Dependencies must be explicitly declared and isolated.We should use dependency management tools to manage project dependencies.

3)Config- It involves separating configuration information, such as database connection strings or API keys, from our codebase. We should store this information in environment variables. This allows for easy configuration changeswithout modifying code.

4)Backing services - Backing services such as databases, message queues, or caching systems should be treated as attached resources.We should be able to connect to these backing services effortlessly through their respective URLs or connection strings, without making any changes in your code.

5)Build, Release, Run - We should separate the build,release and run stages of our application.The build stage involves compiling code and packaging dependencies. The release stage prepares the application for deployment.The run stage executes the application.

6)Processes- The application will run as a collection of stateless processes. This means that no single process keeps track of the state of another process and that no process keeps track of information such as session or workflow status. A stateless process makes scaling easier. 

7)Port Binding - The principle of Port Binding asserts that a service or application is identifiable to the network by port number, not a domain name. By using port binding, we can eliminate the need for a reverse proxy or application container like Nginx or Apache HTTP Server. Instead, our application can be directly deployed to the execution environment and remain accessible through a specific port.

8)Concurrency - The application should be designed to scale horizontally using the process model.Instead of increasing the size of individual instances,scale the application horizontally by adding more instances.

9)Disposability- It ensures that applications should start and stop gracefully.Applications should be capable of rapid deployment, graceful termination, and should be resilient to unexpected crashes and restarts.

10)Dev/Prod Parity- Keep the development, staging, and production environments as similar as possible to reduce inconsistencies and simplify deployment. Emphasize using the same configurations and backing services across all environments.

11)Logs- Treat logs as event streams instead of files. Use log management platforms to collect, store, and analyze logs.

12)Admin Processes- They are the separate tasks or scripts that handle administrative functions such as database migrations,data imports, or periodic cleanup.These processes are executed independently of the main application,ensuring scalability,maintenance and stability.




## Atomic Design

The following are the five stages of atomic design:
1)Atoms-In science, an atom is the smallest unit of matter that makes up a chemical element, as well as the smallest unit of a cell. Similarly, in design, atoms are the most basic components. They are the building blocks of design such as buttons, lines, shapes, icons, text fields, text labels, etc.

2)Molecules-In design, a molecule can be created by combining two or more atoms. For instance, an input field and a button can combine to become a search form, which can perform the search function on the interface.

3)Organisms-Molecules provide us with a basic unit or building block for designing further. Multiple molecules can combine to make an organism. An organism is a collection of molecules that have been bonded together to form complex individual portions of the design such as a login page, form, etc.

4)Templates- Templates are the glues that combine the different organisms or individual sections to create a complete design. 

5)Pages-Pages in atomic design are instances of templates in our user interface but in high fidelity. Pages are what our users will see in the finished product.



