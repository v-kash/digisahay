// // components/SearchSuggestions.jsx
// "use client";
// import React, { useEffect, useRef, useState } from "react";

// export default function SearchSuggestions({
//   suggestions,
//   onSelect,
//   visible,
//   inputRef,
//   isSearching,
//   searchValue,
// }) {
//   const dropdownRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         inputRef &&
//         !inputRef.current?.contains(event.target)
//       ) {
//         onSelect(null);
//       }
//     };

//     if (visible) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [visible, onSelect, inputRef]);

//   useEffect(() => {
//     setExpanded(false);
//   }, [suggestions, searchValue]);

//   if (!visible) return null;

//   const shouldOpenTop =
//     suggestions.length > 1 || (!isSearching && suggestions.length === 0);

//   return (
//     <div
//       ref={dropdownRef}
//       className={`absolute left-4 right-4 z-50 bg-white rounded-[28px] shadow-2xl border border-gray-200 overflow-hidden max-h-[320px] overflow-y-auto transition-all duration-300 ease-out animate-in fade-in zoom-in-95
//         max-sm:fixed max-sm:top-16 max-sm:left-0 max-sm:right-0 max-sm:bottom-0 max-sm:m-0 max-sm:w-screen max-sm:h-screen max-sm:max-h-none max-sm:rounded-none max-sm:border-0 max-sm:z-[200]
//         ${shouldOpenTop ? "bottom-full mb-3" : "top-full mt-2"}`}
//       style={{
//         boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.08)",
//       }}
//     >
//       {/* Mobile-only header bar */}
//       <div className="hidden max-sm:flex items-center gap-3 px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
//         <button
//           onClick={() => onSelect(null)}
//           className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0"
//         >
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="19" y1="12" x2="5" y2="12"></line>
//             <polyline points="12 19 5 12 12 5"></polyline>
//           </svg>
//         </button>
//         <div className="text-[14px] font-semibold text-[#333333] truncate">
//           {searchValue ? `Results for "${searchValue}"` : "Search Services"}
//         </div>
//       </div>

//       <div className="py-2 max-sm:h-[calc(100vh-64px-60px)] max-sm:overflow-y-auto">
//         {isSearching ? (
//           <div className="flex flex-col items-center justify-center py-10 px-6 max-sm:py-20">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce [animation-delay:-0.3s]" />
//               <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce [animation-delay:-0.15s]" />
//               <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce" />
//             </div>

//             <p className="text-[14px] font-medium text-[#6A6A6A] tracking-tight">
//               Finding the best services for you...
//             </p>
//           </div>
//         ) : suggestions.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-10 px-6 max-sm:py-20 text-center">
//             <div className="w-14 h-14 rounded-full bg-[#604BE3]/10 flex items-center justify-center mb-4">
//               <svg
//                 width="26"
//                 height="26"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#604BE3"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//               </svg>
//             </div>

//             <h3 className="text-[16px] font-semibold text-[#333333] tracking-tighter mb-2">
//               No matching services found
//             </h3>

//             <p className="text-[14px] text-[#6A6A6A] font-medium leading-relaxed max-w-[260px]">
//               We couldn't find anything for{" "}
//               <span className="text-[#604BE3] font-semibold">
//                 "{searchValue}"
//               </span>
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
//               {["SEO", "Branding", "Website", "Marketing"].map(
//                 (item, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 rounded-full bg-[#604BE3]/5 border border-[#604BE3]/10 text-[#604BE3] text-[12px] font-semibold"
//                   >
//                     {item}
//                   </span>
//                 ),
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="py-2">
//             {suggestions.map((suggestion, index) => {
//               const visibilityClass =
//                 !expanded && index >= 5 ? "lg:hidden" : "";

//               return (
//                 <button
//                   key={index}
//                   onClick={() => onSelect(suggestion.service)}
//                   className={`w-full text-left px-4 max-sm:px-4 py-3.5 max-sm:py-4 hover:bg-[#604BE3]/5 transition-all duration-150 group flex items-center gap-3 ${visibilityClass}`}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#604BE3]/10 flex items-center justify-center shrink-0 transition-colors">
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-gray-400 group-hover:text-[#604BE3] transition-colors"
//                     >
//                       <circle cx="11" cy="11" r="8"></circle>
//                       <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                     </svg>
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <div className="text-[15px] font-semibold text-[#333333] group-hover:text-[#604BE3] transition-colors tracking-tighter">
//                       {suggestion.service}
//                     </div>
//                     {suggestion.matchedKeywords.length > 0 && (
//                       <div className="text-[13px] text-[#6A6A6A] font-medium mt-0.5 truncate">
//                         Looking for:{" "}
//                         {suggestion.matchedKeywords.slice(0, 3).join(", ")}
//                       </div>
//                     )}
//                   </div>

//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-gray-300 group-hover:text-[#604BE3] transition-colors shrink-0"
//                   >
//                     <line x1="5" y1="12" x2="19" y2="12"></line>
//                     <polyline points="12 5 19 12 12 19"></polyline>
//                   </svg>
//                 </button>
//               );
//             })}

//             {!expanded && suggestions.length > 5 && (
//               <button
//                 onClick={() => setExpanded(true)}
//                 className="hidden lg:block w-full text-center py-3 text-[13px] font-semibold text-[#604BE3] border-t border-gray-100 mt-1"
//               >
//                 Show {suggestions.length - 5} more results
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// components/SearchSuggestions.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";

export default function SearchSuggestions({
  suggestions,
  onSelect,
  visible,
  inputRef,
  isSearching,
  searchValue,
  isMobile,
}) {
  const dropdownRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target) &&
  //       inputRef &&
  //       !inputRef.current?.contains(event.target)
  //     ) {
  //       onSelect(null);
  //     }
  //   };

  //   if (visible) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [visible, onSelect, inputRef]);

  useEffect(() => {
  if (isMobile) return; // MobileSearchOverlay handles its own closing

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      inputRef &&
      !inputRef.current?.contains(event.target)
    ) {
      onSelect(null);
    }
  };

  if (visible) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [visible, onSelect, inputRef, isMobile]);

  useEffect(() => {
    setExpanded(false);
  }, [suggestions, searchValue]);

  if (!visible) return null;

  const shouldOpenTop =
    suggestions.length > 1 || (!isSearching && suggestions.length === 0);

  return (
    <div
      ref={dropdownRef}
      className={`max-sm:hidden absolute left-4 right-4 z-50 bg-white rounded-[28px] shadow-2xl border border-gray-200 overflow-hidden max-h-[320px] overflow-y-auto transition-all duration-300 ease-out animate-in fade-in zoom-in-95 ${
        shouldOpenTop ? "bottom-full mb-3" : "top-full mt-2"
      }`}
      style={{
        boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <div className="py-2">
        {isSearching ? (
          <div className="flex flex-col items-center justify-center py-10 px-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce" />
            </div>
            <p className="text-[14px] font-medium text-[#6A6A6A] tracking-tight">
              Finding the best services for you...
            </p>
          </div>
        ) : suggestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#604BE3]/10 flex items-center justify-center mb-4">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#604BE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="text-[16px] font-semibold text-[#333333] tracking-tighter mb-2">
              No matching services found
            </h3>
            <p className="text-[14px] text-[#6A6A6A] font-medium leading-relaxed max-w-[260px]">
              We couldn't find anything for{" "}
              <span className="text-[#604BE3] font-semibold">"{searchValue}"</span>
            </p>
            {/* <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {["SEO", "Branding", "Website", "Marketing"].map((item, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-[#604BE3]/5 border border-[#604BE3]/10 text-[#604BE3] text-[12px] font-semibold">
                  {item}
                </span>
              ))}
            </div> */}
          </div>
        ) : (
          <div className="py-2">
            {suggestions.map((suggestion, index) => {
              const visibilityClass = !expanded && index >= 5 ? "lg:hidden" : "";
              return (
                <button
                  key={index}
                  onClick={() => onSelect(suggestion.service)}
                  className={`w-full text-left px-4 py-3.5 hover:bg-[#604BE3]/5 transition-all duration-150 group flex items-center gap-3 ${visibilityClass}`}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#604BE3]/10 flex items-center justify-center shrink-0 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#604BE3] transition-colors">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-[#333333] group-hover:text-[#604BE3] transition-colors tracking-tighter">
                      {suggestion.service}
                    </div>
                    {suggestion.matchedKeywords.length > 0 && (
                      <div className="text-[13px] text-[#6A6A6A] font-medium mt-0.5 truncate">
                        Looking for: {suggestion.matchedKeywords.slice(0, 3).join(", ")}
                      </div>
                    )}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-[#604BE3] transition-colors shrink-0">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              );
            })}

            {!expanded && suggestions.length > 5 && (
              <button
                onClick={() => setExpanded(true)}
                className="hidden lg:block w-full text-center py-3 text-[13px] font-semibold text-[#604BE3] border-t border-gray-100 mt-1"
              >
                Show {suggestions.length - 5} more results
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}