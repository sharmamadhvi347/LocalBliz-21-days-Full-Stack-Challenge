let content;
if (isloggedin){
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}

return(
    <div>
        {content}
    </div>
);


//more compact form:
// <div>
//   {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />
//   )}
// </div>