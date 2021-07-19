    
 function minCoins(coins,len,sum)
 {
     let ans =[];
     let i=len-1;
     while(i>=0){
         while(sum>=coins[i])
         {
             sum-=coins[i];
             ans.push(coins[i]);
         }
         i-=1;
     }
     if(ans.reduce((a,b)=>{return a+b})!=totalValue){
         return -1;
     }
     else
     {
         return ans.length;
     }
 }
 
}

 
  let noOfCoins=4;
  let totalValue=11;
  let coins=[1,3,5,6];
  
  let ans=minCoins(coins,noOfCoins,totalValue);
  console.log(ans);
