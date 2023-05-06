import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventDetailsComponent } from './event-details/event-details.component';
import { GeneralstatComponent } from './generalstat/generalstat.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { FormsModule } from '@angular/forms';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { ExportCsvButtonComponent } from './export-csv-button/export-csv-button.component';
import { StatsParticipantsComponent } from './stats-participants/stats-participants.component';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotreMissionComponent } from './notre-mission/notre-mission.component';
import { EventsComponent } from './events/events.component';
import { EventListOpenComponent } from './event-list-open/event-list-open.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventDetailsFrontComponent } from './event-details-front/event-details-front.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    GeneralstatComponent,
    EventCreateComponent,
    ParticipantListComponent,
    UpdateParticipantComponent,
    ExportCsvButtonComponent,
    StatsParticipantsComponent,
    AuthAdminComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    NotreMissionComponent,
    EventsComponent,
    EventListOpenComponent,
    EventCardComponent,
    EventDetailsFrontComponent,
    FormulaireInscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
