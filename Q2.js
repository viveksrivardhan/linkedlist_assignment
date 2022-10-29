class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function Node_new(data) {
  temp = new Node();
  temp.data = data;
  temp.next = null;
  return temp;
}

function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

function merge_list(h1, h2) {
  if (h1 == null) return h2;
  if (h2 == null) return h1;

  if (h1.data < h2.data) {
    h1.next = merge_list(h1.next, h2);
    return h1;
  } else {
    h2.next = merge_list(h1, h2.next);
    return h2;
  }
}

head1 = Node_new(1);
head1.next = Node_new(5);
head1.next.next = Node_new(6);

head2 = Node_new(0);
head2.next = Node_new(2);
head2.next.next = Node_new(4);

merged_head = merge_list(head1, head2);
printList(merged_head);
