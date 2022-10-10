interface currUser {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function InputForm({
  name,
  handleChange,
  handleSubmit,
}: currUser) {
  return (
    <div>
      <form>
        <label placeholder="name">Name</label>
        <input
          type="text"
          placeholder="Test"
          name="name"
          value={name}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
