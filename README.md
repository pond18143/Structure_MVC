# Structure_MVC

สร้าง Databse จาก https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-cmd&fbclid=IwAR2moh3nQQ8kSD4O3fOaQt7xsVV3ro7GGUG5w1ncA7mDgrtWcotIIaJCbF8

  -docker pull mcr.microsoft.com/mssql/server:2019-latest

  -sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourStrong@Passw0rd>" \
   -p 1433:1433 --name sql1 -h sql1 \
   -d mcr.microsoft.com/mssql/server:2019-latest
   
   
Script 
  CREATE DATABSE pondmvc;
  
  CREATE TABLE mvc.dbo.twitteraccount (
Hashtag varchar(5) CHECK (Hashtag = UPPER(Hashtag)) NOT NULL,
Sumtag varchar(140) CHECK (Sumtag = UPPER(Sumtag)) NOT NULL,
) GO

M คือ ส่วนดาต้าเบท
V คือ ส่วนUI
C คือ ส่วนโลจิค

 Start
    -npm init -y
    
    -npm install body-parser
    
    -npm install express
    
    -npm install mssql
    
    -npm install swagger-ui-express
    
    -npm install winston@2.4.0
    
  OR 
    npm install
