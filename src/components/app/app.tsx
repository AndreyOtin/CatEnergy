function App({ data }: { data: [] }): JSX.Element {
  return (
    <div>
      {data.map((el: { title: string })=>el.title)}
    </div>
  );
}

export default App;
