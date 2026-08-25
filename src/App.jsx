import './App.css'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  const [stageName, setStageName] = useState("Pick a DSA Technique");
  const [activeAlgorithm, setActiveAlgorithm] = useState("");
  const [textHeaderName, setTextHeaderName] = useState("Pick a DSA Technique");
  const [problemDescription, setProblemDescription] = useState("Problem: ");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const twoPointerArray = [2, 7, 11, 15];
  const slidingWindowArray = [2, 1, 5, 1, 3, 2];
  const binarySearchArray = [2, 8, 15, 23, 42, 56, 72];
  const [activeTab, setActiveTab] = useState("Logic");
  const [activeLanguage, setActiveLanguage] = useState("Python");
  const languageMap = {
    "Python": "python",
    "Java": "java",
    "C++": "cpp"
  }


  const handleLogicTabClick = () => {
    setActiveTab("Logic");
  };

  const handleCodeTabClick = () => {
    setActiveTab("Code");
  };

  const handleTwoPointerClick = () => {
    setStageName("Two Pointer");
    setActiveAlgorithm("TwoPointer");
    setTextHeaderName("Two Pointer");
    setProblemDescription(`Problem: Given a sorted array of integers, find two numbers that add up to the target value.

      Array: [2, 7, 11, 15]
      Target: 18`);
    setCurrentStageIndex(0);
  };

  const handleNext = () => {
    if(activeAlgorithm === "TwoPointer" && currentStageIndex < twoPointerStages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
    }
    else if(activeAlgorithm === "SlidingWindow" && currentStageIndex < slidingWindowStages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
    }
    else if(activeAlgorithm === "BinarySearch" && currentStageIndex < binarySearchStages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if(currentStageIndex > 0) {
      setCurrentStageIndex(currentStageIndex - 1);
    }
  };

  const twoPointerStages = [
    {
      stageIndex: 0,
      leftPointer: 0,
      rightPointer: 3,
      explanation: "Initialise the left pointer at the beginning of the array and the right pointer at the end of the array."
    },
    {
      stageIndex: 1,
      leftPointer: 0,
      rightPointer: 3,
      explanation: "Calculate the sum of the values at the current pointers: 2 + 15 = 17."
    },
    {
      stageIndex: 2,
      leftPointer: 0, 
      rightPointer: 3,
      explanation: "Compare the sum (17) to the target (18). Since 17 is less than 18 we need to find a larger sum. Because the array is sorted in ascending order we move the left pointer to the right."
    },
    {
      stageIndex: 3,
      leftPointer: 1,
      rightPointer: 3,
      explanation: "Move the left pointer one step to the right to index 1 (value 7)."
    },
    {
      stageIndex: 4,
      leftPointer: 1,
      rightPointer: 3,
      explanation: "Calculate the new sum: 7 + 15 = 22."
    },
    {
      stageIndex: 5,
      leftPointer: 1,
      rightPointer: 3,
      explanation: "Compare the sum (22) to the target (18). Since 22 is greater than 18 we are over our target and need a smaller sum. We move the right pointer to the left."
    },
    {
      stageIndex: 6,
      leftPointer: 1,
      rightPointer: 2,
      explanation: "Move the right pointer one step to the left to index 2 (value 11)."
    },
    {
      stageIndex: 7,
      leftPointer: 1,
      rightPointer: 2,
      explanation: "Calculate the new sum: 7 + 11 = 18."
    },
    {
      stageIndex: 8,
      leftPointer: 1,
      rightPointer: 2,
      explanation: "Target found. The sum matches our target of 18. The algorithm stops and returns the indices [1, 2]."
    }
  ];


  const twoPointerCode = {
    "Python": `
      def twoSum(array, target):

        left = 0
        right = len(array) - 1


        while(left < right):

          current_sum = array[left] + array[right]

          if current_sum == target:
            return [left, right]

          elif current_sum > target:
            right -= 1

          else:
            left += 1
        
        return []`,

    "Java": `
      class Solution {
      
        public int[] twoSum(int[] array, int target) {
        
          int left = 0;
          int right = array.length - 1;

          while(left < right) {
          
            int current_sum = array[left] + array[right];

            if(current_sum == target) {
              return new int[] {left, right};
            }

            else if(current_sum > target) {
              right--;
            }

            else {
              left++;
            }
            
          }
        
          return new int[]{};
        }
      }`,

    "C++": `
      class Solution {
      
      public:

        vector<int> twoSum(vector<int>& array, int target) {

          int left = 0;
          int right = array.size() - 1;

          while(left < right) {

            int current_sum = array[left] + array[right];

            if(current_sum == target) {
              return {left, right};
            }

            else if(current_sum > target) {
              right--;
            }

            else {
              left++;  
            }
          
          }
        
          return {};
        }
      };`
  }

  const handleSlidingWindowClick = () => {
    setStageName("Sliding Window");
    setActiveAlgorithm("SlidingWindow");
    setTextHeaderName("Sliding Window");
    setProblemDescription(`Problem: Given an array of integers and an integer k, find the maximum sum of any contiguous subarray of size k.
      
      Array: [2, 1, 5, 1, 3, 2]
      k: 3
    `);
    setCurrentStageIndex(0);
  }

  const slidingWindowCode = {
    "Python" : `
      def maxSubarraySum(array, k):

        if len(array) < k:
          return 0

        left = 0
        right = k-1
        length_of_array = len(array) - 1

        current_sum = sum(array[left : right+1])
        max_sum = current_sum 
        

        while right < length_of_array:

          current_sum -= array[left]

          left += 1
          right += 1

          current_sum += array[right]

          if current_sum > max_sum:
            max_sum = current_sum 

        
        return max_sum`,

    "Java" : `
      class Solution {

        public int maxSubarraySum(int[] array, int k) {
        
          if(array.length < k) {
            return 0;
          }

          int left = 0;
          int right = k-1;
          int length_of_array = array.length - 1;
          
          int current_sum = 0;

          for(int i=0; i<=right; i++) {
            current_sum += array[i];
          }

          int max_sum = current_sum;

          while(right < length_of_array) {

            current_sum -= array[left];

            left++;
            right++;

            current_sum += array[right];

            if(current_sum > max_sum) {
              max_sum = current_sum;
            }
          
          }

          return max_sum;

        }
      }`,

    "C++" : `
      class Solution {

        public:

          int maxSubarraySum(vector<int>& array, int k) {
          
            if(array.size() < k) {
              return 0;
            }

            int left = 0;
            int right = k-1;
            int length_of_array = array.size() - 1;

            int current_sum = 0;

            for(int i=0; i<=right; i++) {
              current_sum += array[i];
            }
            
            int max_sum = current_sum;

            while(right < length_of_array) {
            
              current_sum -= array[left];

              left++;
              right++;

              current_sum += array[right];

              if(current_sum > max_sum) {
                max_sum = current_sum;
              }
            }

            return max_sum;
          }
      };`
  }

  const slidingWindowStages = [
    {
      stageIndex: 0, 
      leftPointer: 0,
      rightPointer: 2,
      explanation: "Initialise the window of size k=3 at the start of the array. Calculate the sum of the first window: 2 + 1 + 5 = 8. Set the maximum sum to 8." 
    },
    {
      stageIndex: 1,
      leftPointer: 1,
      rightPointer: 3,
      explanation: "Slide the window one step right. Instead of recalculating the sum, subtract the number that left the window (2) and add the new number (1) to the sum.",
    },
    {
      stageIndex: 2, 
      leftPointer: 1,
      rightPointer: 3,
      explanation: "The new sum is 8 - 2 + 1 = 7. Compare that to the maximum sum (8). It does not change and remains as 8."
    },
    {
      stageIndex: 3,
      leftPointer: 2,
      rightPointer: 4,
      explanation: "Slide the window to the right again. Subtract the outgoing number (1) and add the incoming number (3)."
    },
    {
      stageIndex: 4,
      leftPointer: 2,
      rightPointer: 4,
      explanation: "The new sum is 7 - 1 + 3 = 9. Since 9 is greater than our previous maximum sum of 8, we update the maximum sum to 9."
    },
    {
      stageIndex: 5,
      leftPointer: 3,
      rightPointer: 5,
      explanation: "Slide the window to the right. Subtract the outgoing number (5) and add the incoming number (2)."
    },
    {
      stageIndex: 6,
      leftPointer: 3,
      rightPointer: 5,
      explanation: "The new sum is 9 - 5 + 2 = 6. Comparing that to our maximum sum which is 9. Since the new sum is lower, our maximum sum remains the same (9)."
    },
    {
      stageIndex: 7,
      leftPointer: 3,
      rightPointer: 5,
      explanation: "The right pointer has reached the end of the array. The algorithm terminates and returns the maximum sum found: 9."
    }
  ]
  
  const handleBinarySearchClick = () => {
    setStageName("Binary Search");
    setActiveAlgorithm("BinarySearch");
    setTextHeaderName("Binary Search");
    setProblemDescription(`Problem: Given an array of integers sorted in ascending order, find the index of the target number. If the target does not exist in the array return -1.
      
      array: [2, 8, 15, 23, 42, 56, 72]
      target = 42
      `);
    setCurrentStageIndex(0);
  }


  const binarySearchStages = [
    {
      stageIndex: 0,
      leftPointer: 0,
      rightPointer: 6,
      midPointer: 3,
      explanation: "Initialise the left pointer at the start of the array and the right pointer at the end. Calculate the middle index: (0 + 6) / 2 = 3. The middle value is 23."
    },
    {
      stageIndex: 1,
      leftPointer: 0,
      rightPointer: 6,
      midPointer: 3,
      explanation: "Compare the middle value (23) to our target (42). Since 23 is less than 42, we know the target must be in the right half of the array. We can ignore the left half."
    },
    {
      stageIndex: 2,
      leftPointer: 4,
      rightPointer: 6,
      midPointer: 5,
      explanation: "Move the left pointer to middle + 1 (index 4) to focus on the right half. Calculate the new middle index: (4+6) / 2. The new middle value is 56."
    },
    {
      stageIndex: 3,
      leftPointer: 4,
      rightPointer: 6,
      midPointer: 5,
      explanation: "Compare the new middle value (56) to our target (42). Since 56 is greater than 42 we know the target must be in the left half of this new window. We ignore the right half."
    },
    {
      stageIndex: 4,
      leftPointer: 4,
      rightPointer: 4,
      midPointer: 4,
      explanation: "Move the right pointer to middle - 1 (index 4). Calculate the new middle index: (4 + 4) / 2 = 4. The new middle value is 42."
    },
    {
      stageIndex: 5,
      leftPointer: 4,
      rightPointer: 4,
      midPointer: 4,
      explanation: "Compare the middle value (42) to our target (42). They match which means the algorithm terminates and returns the index 4."
    }
  ]

  const binarySearchCode = {
    "Python" : `

      def binarySearch(array, target):

        left = 0
        right = len(array) - 1

        while left <= right:

          mid = (left + right) // 2

          if array[mid] == target:
            return mid 
          elif array[mid] > target:
            right = mid - 1
          else:
            left = mid + 1

        return -1
    `,

    "Java" : `

      class Solution {
      
        public int binarySearch(int[] array, int target) {
        
          int left = 0;
          int right = array.length - 1;

          while(left <= right) {

            int mid = left + (right - left) / 2;

            if(array[mid] == target) {
              return mid; 
            }
            else if(array[mid] > target) {
              right = mid - 1;
            }
            else {
              left = mid + 1;
            }
          }
        
          return -1;
        }
      }`,

    "C++" : `

      class Solution {
      
        public:

          int binarySearch(vector<int>& array, int target) {
          
            int left = 0;
            int right = array.size() - 1;

            while(left <= right) {
            
              int mid = left + (right - left) / 2;

              if(array[mid] == target) {
                return mid;
              }
              else if(array[mid] > target) {
                right = mid - 1;
              }
              else {
                left = mid + 1;  
              }
            }

            return -1;
          }
      };
    `
  }


  const handleStackClick = () => {
    setStageName("Stack");
    setActiveAlgorithm("Stack");
    setTextHeaderName("Stack");
    setProblemDescription(`Problem: Given a string containing just the characters (, ), {, }, [ and ]. Determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets in the correct order.

      s: {[()]}
      expected: True
      `);
    setCurrentStageIndex(0);
  }

  
  let currentStage = null;
  let slidingWindowPrevSum = 0;
  let slidingWindowOutVal = 0;
  let slidingWindowInVal = 0;
  let slidingWindowNewSum = 0;
  let slidingWindowMaxSum = 0;


  if(activeAlgorithm === "TwoPointer") {
    currentStage = twoPointerStages[currentStageIndex];
  }
  else if(activeAlgorithm === "SlidingWindow") {
    currentStage = slidingWindowStages[currentStageIndex];
  
    if(currentStageIndex > 0 && currentStageIndex < 7) {

      currentStage = slidingWindowStages[currentStageIndex];

      let runningSum = slidingWindowArray[0] + slidingWindowArray[1] + slidingWindowArray[2];
      slidingWindowMaxSum = runningSum;

      for(let i=1; i<=currentStage.leftPointer; i++) {
        runningSum = runningSum - slidingWindowArray[i-1] + slidingWindowArray[i+2];

        if(runningSum > slidingWindowMaxSum) {
          slidingWindowMaxSum = runningSum;
        }
      }


      const outIndex = currentStage.leftPointer - 1;
      const inIndex = currentStage.rightPointer;

      slidingWindowPrevSum = slidingWindowArray[outIndex] + slidingWindowArray[currentStage.leftPointer] + slidingWindowArray[inIndex - 1];
      slidingWindowOutVal = slidingWindowArray[outIndex];
      slidingWindowInVal = slidingWindowArray[inIndex];
      slidingWindowNewSum = slidingWindowPrevSum - slidingWindowOutVal + slidingWindowInVal;

    }
  }
  else if(activeAlgorithm === "BinarySearch") {
    currentStage = binarySearchStages[currentStageIndex];
  }

  return (
    <div className="appContainer">
      
      <div className="topSection">
        <div className="visualiserContainer">


          <div className="visualStage">
            <h1>{stageName} Step {currentStageIndex + 1}</h1>

            {activeAlgorithm === "TwoPointer" && currentStageIndex > 0 && (

              <div className="whiteBoard">
                <div className="mathRow">
                  <span className="operator"></span>
                  <span className="number pencilWrite" key={`left-${currentStageIndex}`}>{twoPointerArray[currentStage.leftPointer]}</span>
                </div>

                <div className="mathRow">
                  <span className="operator">+</span>
                  <span className="number pencilWrite" key={`right-${currentStageIndex}`}>{twoPointerArray[currentStage.rightPointer]}</span>
                </div>
                <hr className="resultLine"></hr>
                <div className="mathResult">
                  <span className="operator"></span>
                  <span className="number pencilWrite" key={`sum-${currentStageIndex}`}>{twoPointerArray[currentStage.leftPointer] + twoPointerArray[currentStage.rightPointer]}</span>
                </div>
              </div>
            )}

            {activeAlgorithm === "SlidingWindow" && (<div className="whiteBoard" style={{width:"max-content", top: "50%"}}>

              {currentStageIndex === 0 && (

                <>
                  <div className="mathRow">

                    <span className="operator"></span>
                    <span className="number pencilWrite">{slidingWindowArray[0]} + {slidingWindowArray[1]} + {slidingWindowArray[2]} = {slidingWindowArray[0] + slidingWindowArray[1] + slidingWindowArray[2]}</span>

                  </div>

                  <div className="mathRow" style={{ marginTop: "10px" }}>

                    <span className="number pencilWrite" style={{color:"rgb(118, 219, 140)"}}>
                      Max Sum = {slidingWindowArray[0] + slidingWindowArray[1] + slidingWindowArray[2]}
                    </span>

                  </div>
                </>
              )}


              {currentStageIndex > 0 && currentStageIndex < 7 && (

                <>

                  <div className="mathRow">

                    <span className="operator"></span>
                    <span className="number pencilWrite">{slidingWindowPrevSum} - {slidingWindowOutVal} + {slidingWindowInVal} = {slidingWindowPrevSum - slidingWindowOutVal + slidingWindowInVal}</span>

                  </div>

                  <div className="mathRow" style={{marginTop: "10px"}}>
                    
                    <span className="number pencilWrite" style={{color: "rgb(118, 219, 140"}}>

                      Max Sum = {slidingWindowMaxSum}

                    </span>
                  </div>


                </>
              )}

              {currentStageIndex === 7 && (

                <>

                  <div className="mathResult">

                    <span className="operator"></span>
                    <span className="number pencilWrite">Max Sum = 9</span>
                  </div>
                
                </>

              )}


            </div>)}



            {activeAlgorithm === "TwoPointer" && (
            
              <div className="arrayContainer">

              {twoPointerArray.map((value, index) => {

                let isLeftPointer = currentStage?.leftPointer === index;
                let isRightPointer = currentStage?.rightPointer === index;

                return (
                  <div key={index} className="arrayWrapper">
                    
                    <div className={`arrayBox ${isLeftPointer ? "leftPointerActive" : ""} ${isRightPointer ? "rightPointerActive" : ""}`}>
                      {value}
                    </div>

                    <div className="pointerLabel">
                      {isLeftPointer && (<div className="label leftLabel customPointer">
                        
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Left</p>
                        </div>)}


                      {isRightPointer && (<div className="label rightLabel">
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Right</p>
                      </div>)}
                        
                    </div>
                    
                  </div>
                )
              })}

              </div>
              
            )}

            {activeAlgorithm === "SlidingWindow" && (

              <div className="arrayContainer">

              {slidingWindowArray.map((value, index) => {

                let isLeftPointer = currentStage?.leftPointer === index;
                let isRightPointer = currentStage?.rightPointer === index;

                let betweenPointer = currentStage && index >= currentStage.leftPointer && index <= currentStage.rightPointer;
                let isMiddleBox = activeAlgorithm === "SlidingWindow" && betweenPointer && !isLeftPointer && !isRightPointer;


                return (
                  <div key={index} className="arrayWrapper">
                    
                    <div className={`arrayBox ${betweenPointer ? "leftPointerActive" : ""} ${isMiddleBox ? "middleBoxUp" : ""}`}>
                      {value}
                    </div>

                    <div className="pointerLabel">
                      {isLeftPointer && (<div className="label leftLabel customPointer">
                        
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Left</p>
                        </div>)}


                      {isRightPointer && (<div className="label rightLabel">
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Right</p>
                      </div>)}
                        
                    </div>
                    
                  </div>
                )
              })}

              </div>

            )}


            {activeAlgorithm === "BinarySearch" && (

              <div className="whiteBoard" style={{width: "max-content", top: "55%"}}>

                <div className="mathRow">

                  <span className="number pencilWrite" style={{textAlign: "left"}}>
                    left = {currentStage.leftPointer} <br></br> right = {currentStage.rightPointer}
                  </span>
                </div>

                <div className="mathRow">
                  
                  <span className="number pencilWrite">
                    middle = ({currentStage.leftPointer} + {currentStage.rightPointer}) / 2 = {currentStage.midPointer}
                  </span>
                </div>

                {currentStageIndex === 1 && (

                  <div className="mathRow" style={{ marginTop: "10px" }}>
                  
                    <span className="number pencilWrite" style={{color: "rgb(118, 219, 140"}}>
                  
                      {binarySearchArray[currentStage.midPointer]} &lt; 42 (Search Right)
                    </span>
                  </div>

                )}

                {currentStageIndex === 3 && (

                  <div className="mathRow" style={{marginTop: "10px"}}>
                    <span className="number pencilWrite" style={{color: "rgb(118, 219, 140"}}>
                  
                      {binarySearchArray[currentStage.midPointer]} &gt; 42 (Search left)
                    </span>
                  </div>
                )}

                {currentStageIndex === 5 && (

                  <div className="mathRow" style={{marginTop: "10px"}}>
                    <span className="number pencilWrite" style={{color: "rgb(118, 219, 140"}}>

                      {binarySearchArray[currentStage.midPointer]} = 42 (Target found)
                    </span>
                  </div>
                )}

              </div>

            )}

    
            {activeAlgorithm === "BinarySearch" && (

              <div className="arrayContainer">

                {binarySearchArray.map((value, index) => {

                  let isLeftPointer = currentStage?.leftPointer === index;
                  let isRightPointer = currentStage?.rightPointer === index;
                  let isMidPointer = currentStage?.midPointer === index;
                  
                  return (
                  <div key={index} className="arrayWrapper">
                    
                    <div className={`arrayBox ${isLeftPointer ? "leftPointerActive" : ""} ${isRightPointer ? "rightPointerActive" : ""} ${isMidPointer ? "midPointerActive" : ""}`}>
                      {value}
                    </div>


                    <div className="pointerLabel">
                      {isLeftPointer && currentStageIndex < 4 && (<div className="label leftLabel customPointer">
                        
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Left</p>
                        </div>)}


                      {isRightPointer && currentStageIndex < 4 && (<div className="label rightLabel">
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Right</p>
                      </div>)}

                      {isMidPointer && (<div className="label middleLabel">
                        <svg width="24" height="30">
                          <line x1="12" y1="27" x2="12" y2="4" stroke="white" strokeWidth="5" strokeLinecap="round"></line>
                          <polyline points="2 15 12 2 22 15" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"></polyline>
                        </svg>
                        <p>Middle</p>
                      </div>)}

                        
                    </div>
                    
                  </div>
                )


                })}
              </div>



            )}

          </div>  

          <div className="controlButtons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>

          </div>
        </div>


        <div className="sideBar">
          <div className="tabs">
            <button className={`tabButton ${activeTab === "Logic" ? "activeTabButton" : ""}`} onClick={handleLogicTabClick}>
              Logic
            </button>
            <button className={`tabButton ${activeTab === "Code" ? "activeTabButton" : ""}`} onClick={handleCodeTabClick}>
              Code
            </button>
          </div>
          
          <div className="sideBarContent">

            {activeTab === "Logic" ? (
              
              <>
                <div className="problemStatement">  
                  <h2>{textHeaderName}</h2>
                  <hr></hr>
                  <p>{problemDescription}</p>
                </div>

                <div className="problemExplanation">
                  <h2>Explanation</h2>
                  <hr></hr>
                  <p>{currentStage?.explanation || "Select an algorithm to see its explanation."}</p>
                </div>
              </>
            ) : (


              <div className="codeBlockContainer">

                <div className="codingLanguage"> 

                  {["Python", "Java", "C++"].map((lang) => (

                    <button key={lang} className={`langButton ${activeLanguage === lang ? "activeLang" : ""}`} onClick={() => setActiveLanguage(lang)}>{lang}</button>
                  ))}

                </div>

                <SyntaxHighlighter language={languageMap[activeLanguage]} style={vscDarkPlus} className="codeDisplay" showLineNumbers={true}>

                  {activeAlgorithm === "TwoPointer" ? twoPointerCode[activeLanguage] : activeAlgorithm === "SlidingWindow" ? slidingWindowCode[activeLanguage] : activeAlgorithm === "BinarySearch" ? binarySearchCode[activeLanguage] : "Select an algorithm"}

                </SyntaxHighlighter>
              </div>

            )}

          </div>

          
        </div>
      </div>


      <div className="bottomBar">
        <div className="dsaButtons">
          <button className={activeAlgorithm === "TwoPointer" ? "activeDSAAlgorithm" : ""} onClick={handleTwoPointerClick}>Two Pointer</button>
          <button className={activeAlgorithm === "SlidingWindow" ? "activeDSAAlgorithm" : ""} onClick={handleSlidingWindowClick}>Sliding Window</button>
          <button className={activeAlgorithm === "BinarySearch" ? "activeDSAAlgorithm" : ""} onClick={handleBinarySearchClick}>Binary Search</button>
          <button className={activeAlgorithm === "Stack" ? "activeDSAAlgorithm" : ""} onclick={handleStackClick}>Stack</button>
        </div>
      </div>
    </div>
  );
}


export default App;