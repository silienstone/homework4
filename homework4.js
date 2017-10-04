//triangle
const triangle=function(n)
{
	func(0,2*n-1);
};
//n is the height

const zvezda=function(n)
{
	if(n===0){return "";}
	return "*"+zvezda(n-1);
};
 
 const space=function(n)
 {
	 if(n===0){return "";}
	return " "+ space(n-1); 
 };
 


 
 const func=function(n,m) 
 {
	 if(m===-1){return;}
	console.log(space(n)+zvezda(m)	);
	func(n+1, m-2);
 };
 
 
 //the end
 
 
 
 //reverse
 
 
 const reverse=function(str)
 {
return gorcanox(str.length,str);

 };
 
 const gorcanox=function(n,str)
 { 
 if(n===0){return "";}
	return str[n-1]+gorcanox(n-1,str);
	 
	
 };
 
 //the end
 
 
 
 //pow
 
 const pow=function(b,p)
 {
	 if(p===0){return 1}
	 return b* pow(b,p-1);
	 
	 
	 
 };

 
 
 //the end
 
 
 
 
 
 //checkerboard
 
 const mitox=function(n)
 {
	 if(n===0){return "";}
	 return "* "+mitox(n-1);
 };
  const urishtox=function(n)
  {
	  if(n===0){return "";}
  return " *"+urishtox(n-1);
  }
  
  const gorcarar=function(n,m)
  {
	if(m===0){return;} 
	console.log(mitox(n));
	console.log(urishtox(n));
	gorcarar(n,m-1);
  };
 const checkerboard=function(n)
 {
	 if(n%2===0){
	 gorcarar(n,n/2)}
	 else{
		 gorcarar(n,(n-1)/2);
		 console.log(mitox(n));
	 }
	 
	 
 };

 //the end ^___^
 
 
 
 
 