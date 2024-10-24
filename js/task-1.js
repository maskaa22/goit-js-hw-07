const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

for (let i = 0; i < item.length; i++) {
  const title = item[i].querySelector('h2');
  const countElements = item[i].getElementsByTagName('li');
  const list = item[i].querySelector('ul');

  title.className = 'title-category';
  list.className = 'list-category';
  console.log(`Category: ${title.innerHTML}`);
  console.log(`Elements: ${countElements.length}`);
}
