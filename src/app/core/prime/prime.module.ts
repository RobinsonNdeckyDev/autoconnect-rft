import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { Component } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { formatDate } from '@angular/common';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChipsModule } from 'primeng/chips';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  exports: [
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    AccordionModule,
    OverlayPanelModule,
    InputOtpModule,
    TreeSelectModule,
    SkeletonModule,
    ChartModule,
    ChipsModule,
    TreeTableModule,
    DataViewModule,
    TagModule,
    EditorModule,
    RatingModule,
    InputTextareaModule,
    CalendarModule,
    ProgressBarModule,
    ToastModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ButtonModule,
    CommonModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    TabViewModule,
    MultiSelectModule,
    ToastModule, ButtonModule,
    // ConfirmDialogModule
  ],
})
export class PrimeModule {}