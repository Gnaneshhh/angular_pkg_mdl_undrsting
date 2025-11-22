import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TableColumn {
  key: string;
  header: string;
  editable?: boolean;
  type?: 'text' | 'number';
}

export interface TableAction {
  label: string;
  callback?: (row: any) => void;
  icon?: string;
  action?: 'edit' | 'delete' | 'custom';
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() actions: TableAction[] = [];
  @Input() idKey: string = 'id';
  @Output() dataUpdated = new EventEmitter<any>();

  editingRowId: any = null;
  editedRow: any = null;
  openDropdownId: any = null;

  isEditing(rowId: any): boolean {
    return this.editingRowId === rowId;
  }

  isAnyRowEditing(): boolean {
    return this.editingRowId !== null;
  }

  startEdit(row: any): void {
    this.editingRowId = row[this.idKey];
    this.editedRow = { ...row };
    this.closeDropdown();
  }

  cancelEdit(): void {
    this.editingRowId = null;
    this.editedRow = null;
  }

  updateRow(): void {
    if (this.editedRow) {
      const index = this.data.findIndex(item => item[this.idKey] === this.editedRow[this.idKey]);
      if (index !== -1) {
        this.data[index] = { ...this.editedRow };
        this.dataUpdated.emit(this.editedRow);
      }
      this.cancelEdit();
    }
  }

  toggleDropdown(rowId: any, event: Event): void {
    event.stopPropagation();
    if (this.openDropdownId === rowId) {
      this.closeDropdown();
    } else {
      this.openDropdownId = rowId;
    }
  }

  closeDropdown(): void {
    this.openDropdownId = null;
  }

  isDropdownOpen(rowId: any): boolean {
    return this.openDropdownId === rowId;
  }

  executeAction(action: TableAction, row: any, event: Event): void {
    event.stopPropagation();
    this.closeDropdown();

    // Handle built-in edit action
    if (action.action === 'edit') {
      this.startEdit(row);
      return;
    }

    // Handle custom callback
    if (action.callback) {
      action.callback(row);
    }
  }

  getEditableValue(column: TableColumn, row: any): any {
    return this.isEditing(row[this.idKey]) ? this.editedRow[column.key] : row[column.key];
  }

  updateEditedValue(column: TableColumn, value: any): void {
    if (this.editedRow) {
      this.editedRow[column.key] = column.type === 'number' ? parseFloat(value) : value;
    }
  }

  formatValue(value: any, column: TableColumn): string {
    if (column.type === 'number' && typeof value === 'number') {
      return value.toFixed(2);
    }
    return value;
  }
}
