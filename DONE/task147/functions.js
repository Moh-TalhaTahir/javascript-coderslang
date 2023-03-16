export const formatTaskList = (tasks) => {
  const narr = [];
  for (let i = 0; i < tasks.length; i++)
  {
  if (tasks[i].status == 'DONE'){
  narr.push('\u2705' + ' ' + 'title: ' + tasks[i].title);
  } else {
    narr.push('\u274c' + ' ' + 'title: ' + tasks[i].title);
  }
  }
  return narr;
  }