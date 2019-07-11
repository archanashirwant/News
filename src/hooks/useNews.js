import { useContext } from 'react';
import { NewsContext } from "../NewsContext";

const useNews = (props) => {
    
    const [,setCategory] = useContext(NewsContext);
/*
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedNews, setFetchedNews] = useState({ articles: [] });
*/
    

    function updateCategory(myselectedCategory) {

      setCategory(category => ({ ...category, currCategory: myselectedCategory }));
     // alert(myselectedCategory);
    }
   
  /*  
    function getCategory() {
     
     if(props.match && props.match.params.category) {

       return props.match.params.category;
     }
     else {

      return 'business';
     }

   }
   
   

   let selectedCategory =  getCategory();
   
    useEffect(() => {

      
      
     
      const getNews = async () => {   
        
        let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=8ce52954572c4edba432a452020a8d5c&category='+ selectedCategory;

        const response = await fetch(url);
        const json = await response.json();
        setFetchedNews(json);
        window.localStorage.setItem([selectedCategory],JSON.stringify(fetchedNews));    
        setIsLoading(false);
  
      };

      if (!window.navigator.onLine) {
        let loc_res = JSON.parse(localStorage.getItem([selectedCategory]));
        setFetchedNews(loc_res);
        setIsLoading(false);
      }else{
        getNews();
      }

    },[selectedCategory]);

  }
 */   
    return {
        updateCategory,      
    }

}
export default  useNews;