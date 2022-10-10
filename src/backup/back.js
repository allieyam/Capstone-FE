// interface Colors {
//   color: string;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export default function InputForm({ color, handleChange, handleSubmit }: Colors) {
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label placeholder="name">Colors</label>
//         <select
//           type="text"
//           placeholder="Blue"
//           name="color"
//           value={color}
//           onChange={handleChange}
//         >
//           <option value="Red">Red</option>
//           <option value="Yellow">Yellow</option>
//           <option value="Green">Green</option>
//           <option value="Green">Black</option>
//         </select>
//       </form>
//     </div>
//   );
// }
